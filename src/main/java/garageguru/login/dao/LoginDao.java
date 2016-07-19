package garageguru.login.dao;

import garageguru.users.model.Users;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

public class LoginDao implements LoginDaoI{
	private EntityManager em;
	
	@Override
	public void setEm(EntityManager em) {
		this.em = em;
	}
	
	@Override
	public boolean loginCheck(String username, String password) {
		Query query = em.createQuery("select id from Users where username=:username AND password=:password");
		query.setParameter("username", username);
		query.setParameter("password", password);
		
		List results = query.getResultList();
		
		if(results.isEmpty())
			return false;
		else
			return true;
		
	}

}
