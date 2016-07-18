package gagageguru.garages.dao;

import java.util.List;

import garageguru.garages.model.Garages;
import garageguru.persons.model.Persons;
import garageguru.users.model.Users;

import javax.persistence.EntityManager;

public interface RegistrationDaoI{
	void setEm(EntityManager em);
	Persons add(Persons person);	
	Garages addGarage(Garages garage);
	
	List getPersonId(String confirmationKey);
	
	int confirmation(String challenge);
	
	Users addAdmin(Users user);
	
	/*
	 * List<Persons> getPersonByEmail(Persons filter, String email);
	
	List<Persons> list(Persons filter);
	 */
}
