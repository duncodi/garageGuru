package gagageguru.garages.dao;

import java.util.List;

import garageguru.garages.model.Garages;
import garageguru.persons.model.Persons;
import garageguru.users.model.Users;

import javax.jms.Session;
import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.hibernate.Criteria;

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
	public int confirmation(String challenge) {
		
		Query query = em.createQuery("update Garages set confirmed=:confirmed where confirmationLink=:challenge");
		query.setParameter("confirmed", 1);
		query.setParameter("challenge", challenge);
		return query.executeUpdate();
		
		/*
		 * public int updateRegistration(String confirmationKey) {
		Query query = em.createQuery("select id from Persons where confirmationLink=:confirmationKey");
		query.setParameter("confirmationKey", confirmationKey);
		List result = query.getResultList();
		
		Long ownerId = null;
		if(!result.isEmpty() && result.get(0) != null)
			ownerId = (Long) result.get(0);
		
		Query update = em.createQuery("update Garages set confirmed=:confirmed, ownerId=:ownerId where confirmationLink=:confirmationKey");
		update.setParameter("confirmed", 1);
		update.setParameter("ownerId", ownerId);
		update.setParameter("confirmationKey", confirmationKey);
		return query.executeUpdate();
	}
		 */
		
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
