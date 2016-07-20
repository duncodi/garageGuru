package garageguru.login.dao;

import garageguru.users.model.Users;

import java.text.SimpleDateFormat;
import java.util.Calendar;
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

	@Override
	public List returnUniqueLink(String username) {				
		Query query = em.createQuery("select confirmationLink from Users where username=:username");
		query.setParameter("username", username);
		return query.getResultList();		
	}

	@Override
	public int updateAfterLogin(String uniqueLinkString, String username) {
		//date and time:
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		String dateUpdated = format.format(cal.getTime());

		SimpleDateFormat timeformat = new SimpleDateFormat("h:m:s");
		String timeUpdated = timeformat.format(cal.getTime());
		// /////////////
		
		Query query = em.createQuery("update Users set lastLoginDate=:lastLoginDate, lastLoginTime=:lastLoginTime, loggedIn=:loggedIn where confirmationLink=:uniqueLinkString AND username=:username");
		query.setParameter("lastLoginDate", dateUpdated);
		query.setParameter("lastLoginTime", timeUpdated);
		query.setParameter("loggedIn", 1);
		query.setParameter("uniqueLinkString", uniqueLinkString);
		query.setParameter("username", username);
		return query.executeUpdate();
		
	}

}
