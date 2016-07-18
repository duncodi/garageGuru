package gagageguru.garages.bean;

import java.util.List;

import garageguru.garages.model.Garages;
import garageguru.persons.model.Persons;
import garageguru.users.model.Users;

public interface RegistrationBeanI {
	void add(Persons person);
	void addGarage(Garages garage);
	
	List getPersonId(String confirmationKey);
	
	int confirmation(String challenge);
	void addAdmin(Users user );
	/*
	List<Persons> getPersonByEmail(String email);
	
	
	List<Persons> list();
	*/
}
