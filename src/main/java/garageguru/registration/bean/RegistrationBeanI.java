package garageguru.registration.bean;

import java.util.List;

import garageguru.garages.model.Garages;
import garageguru.persons.model.Persons;
import garageguru.users.model.Users;

public interface RegistrationBeanI {
	void add(Persons person);
	void addGarage(Garages garage);
	
	List getPersonId(String confirmationKey);
	List getGarageId(String confirmationKey);
	
	int confirmation(String challenge, Long personId);
	void addAdmin(Users user );
	
	int updateGarageAndPerson(String confirmationKey, Long personId, Long garageId);
	/*
	List<Persons> getPersonByEmail(String email);
	
	
	List<Persons> list();
	*/
}
