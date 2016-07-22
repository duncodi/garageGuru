package garageguru.registration.dao;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import garageguru.garages.model.Garages;
import garageguru.persons.model.Persons;
import garageguru.users.model.Users;

import javax.jms.Session;
import javax.persistence.EntityManager;
import javax.persistence.Query;

public class RegistrationDao implements RegistrationDaoI{
	
	private EntityManager em;
	
	@Override
	public void setEm(EntityManager em) {
		this.em = em;
	}
	
	@Override
	public Persons add(Persons person) {
		return em.merge(person);
	}
	
	
	@Override
	public Garages addGarage(Garages garage) {
		return em.merge(garage);
	}

	@Override
	public int confirmation(String confirmationKey, Long personId ) {
		
		//date and time:
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		String dateUpdated = format.format(cal.getTime());

		SimpleDateFormat timeformat = new SimpleDateFormat("h:m:s");
		String timeUpdated = timeformat.format(cal.getTime());
		// /////////////
		
		Query query = em.createQuery("update Persons set confirmed=:confirmed where confirmationLink=:confirmationKey");
		query.setParameter("confirmed", 1);
		query.setParameter("confirmationKey", confirmationKey);
		query.executeUpdate();
		
		Query updateGarage = em.createQuery("update Garages set ownerId=:personId, confirmed=:confirmed, dateConfirmed=:dateUpdated, timeConfirmed=:timeUpdated where confirmationLink=:confirmationKey");
		updateGarage.setParameter("personId", personId);
		updateGarage.setParameter("confirmed", 1);
		updateGarage.setParameter("dateUpdated", dateUpdated);
		updateGarage.setParameter("timeUpdated", timeUpdated);
		updateGarage.setParameter("confirmationKey", confirmationKey);
		
		return updateGarage.executeUpdate();
	}

	@Override
	public Users addAdmin(Users user) {
		return em.merge(user);
	}

	@Override
	public List getPersonId(String confirmationKey) {
		Query query = em.createQuery("select id from Persons where confirmationLink=:confirmationKey");
		query.setParameter("confirmationKey", confirmationKey);
		return query.getResultList();
	}

	@Override
	public List getGarageId(String confirmationKey) {
		Query query = em.createQuery("select id from Garages where confirmationLink=:confirmationKey");
		query.setParameter("confirmationKey", confirmationKey);
		return query.getResultList();
	}

	@Override
	public int updateGarageAndPerson(String confirmationKey, Long personId, Long garageId) {
		Query updateUser = em.createQuery("update Users set personId=:personId, garageId=:garageId where confirmationLink=:confirmationKey");
		updateUser.setParameter("personId", personId);
		updateUser.setParameter("garageId", garageId);
		updateUser.setParameter("confirmationKey", confirmationKey);
		return updateUser.executeUpdate();
	}

	/*
	@Override
	@SuppressWarnings("unchecked")
	public List<Persons> getPersonByEmail(Persons filter, String email) {
		Query query = em.createQuery("select from Persons where email=:email");
		query.setParameter("email", email);
		List<Persons> getPersonByEmail = query.getResultList();
		return getPersonByEmail;
		
	}

	@Override
	public List<Persons> list(Persons filter) {
		// TODO Auto-generated method stub
		return null;
	}
	*/

}
