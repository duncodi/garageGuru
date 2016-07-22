package garageguru.registration.dao;

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
	List getGarageId(String confirmationKey);
	
	int confirmation(String confirmationKey, Long personId);
	int updateGarageAndPerson(String confirmationKey, Long personId, Long garageId);
	
	Users addAdmin(Users user);
	
	/*
	 * List<Persons> getPersonByEmail(Persons filter, String email);
	
	List<Persons> list(Persons filter);
	 */
}
