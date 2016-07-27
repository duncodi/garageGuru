package garageguru.persons.dao;
import java.util.List;

import garageguru.persons.model.Persons;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import garageguru.persons.model.Persons;

import javax.persistence.EntityManager;
public class PersonsDao implements PersonsDaoI{
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
	public List<Persons> allStaffInJson(Persons allStaff, String uniqueLink) {
		Query query = em.createQuery("from Persons where confirmationLink=:uniqueLink");
		query.setParameter("uniqueLink", uniqueLink);
		
		return query.getResultList();
	}
	
	@Override
	public int countAllStaff(String uniqueLink){
		Query query = em.createQuery("select count(id) from Persons where confirmationLink=:uniqueLink");
		query.setParameter("uniqueLink", uniqueLink);
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
		
	}

	@Override
	public int deleteStaff(Long id, String uniqueLink) {
		Query query = em.createQuery("delete from Persons where id=:id and confirmationLink=:uniqueLink");
		query.setParameter("id", id);
		query.setParameter("uniqueLink", uniqueLink);
		return query.executeUpdate();
	}

}
