package garageguru.users.dao;

import garageguru.users.model.Users;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

public class UsersDao implements UsersDaoI{
	private EntityManager em;
	
	@Override
	public void setEm(EntityManager em) {
		this.em = em;
	}

	@Override
	public Users add(Users user) {
		return em.merge(user);
	}

	@Override
	public List<Users> allUsersInJson(Users allUsers, String uniqueLink) {
		Query query = em.createQuery("from Users where confirmationLink=:uniqueLink");
		query.setParameter("uniqueLink", uniqueLink);
		
		return query.getResultList();
	}
	
	@Override
	public int countAllUsers(String uniqueLink){
		Query query = em.createQuery("select count(id) from Users where confirmationLink=:uniqueLink");
		query.setParameter("uniqueLink", uniqueLink);
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
		
	}
}
