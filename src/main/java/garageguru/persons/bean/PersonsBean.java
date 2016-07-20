package garageguru.persons.bean;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import garageguru.persons.dao.PersonsDaoI;
import garageguru.persons.model.Persons;
@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class PersonsBean implements PersonsBeanI {
	@PersistenceContext
	private EntityManager em;
		
	@Inject
	private PersonsDaoI personsDao;
	
	@PostConstruct
	public void init(){
		personsDao.setEm(em);
	}
	
	@Override
	public void add(Persons person) {
		if(person == null)
			return;
		
		personsDao.add(person);
	}

}
