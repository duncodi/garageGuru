package gagageguru.garages.bean;

import gagageguru.garages.dao.RegistrationDaoI;
import garageguru.garages.model.Garages;
import garageguru.persons.model.Persons;
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
public class RegistrationBean implements RegistrationBeanI {
	
	@PersistenceContext
	private EntityManager em;
	
	@Inject
	private RegistrationDaoI registrationDao;
	
	@PostConstruct
	public void init(){
		registrationDao.setEm(em);
	}
	
	@Override
	public void add(Persons person) {
		if(person == null)
			return;
		
		registrationDao.add(person);
	}
	
	@Override
	public void addGarage(Garages garage) {
		if(garage == null)
			return;
		registrationDao.addGarage(garage);
	}

	@Override
	public int confirmation(String challenge) {
		return registrationDao.confirmation(challenge);
	}

	@Override
	public void addAdmin(Users user) {
		if(user == null)
			return;
		registrationDao.addAdmin(user);
	}

	@Override
	public List getPersonId(String confirmationKey) {
		// TODO Auto-generated method stub
		return registrationDao.getPersonId(confirmationKey);
	}
	
	/*
	
	@Override
	public List<Persons> getPersonByEmail(String email){
		return registrationDao.getPersonByEmail(new Persons(), email);
	}
	
	@Override
	public List<Persons> list() {
		// TODO Auto-generated method stub
		return null;
	}
*/
	
	
}
