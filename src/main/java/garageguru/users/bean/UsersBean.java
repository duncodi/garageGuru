package garageguru.users.bean;

import garageguru.users.dao.UsersDaoI;
import garageguru.users.model.Users;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class UsersBean implements UsersBeanI {
	@PersistenceContext
	private EntityManager em;
		
	@Inject
	private UsersDaoI usersDao;
	
	@PostConstruct
	public void init(){
		usersDao.setEm(em);
	}
	
	@Override
	public void add(Users user) {
		if(user == null)
			return;
		
		usersDao.add(user);
	}
	/*
	@Override
	public List<Users> users(String uniqueLink) {
		// TODO Auto-generated method stub
		return usersDao.users(new Users(), uniqueLink);
	}
	*/
	
	public String allUsersInJson(String uniqueLink) {
		Users filter = new Users();
		
		List<Users> users = usersDao.allUsersInJson(filter, uniqueLink);
		StringBuilder sb = new StringBuilder();
		sb.append("[");
		
		int count = usersDao.countAllUsers(uniqueLink);
		for(Users allUsers : users){
			sb.append(allUsers.getJson());
			
			count--;
			if(count>=1)
				sb.append(",");
		}
		sb.append("]");
		return sb.toString();
		
	}
}
