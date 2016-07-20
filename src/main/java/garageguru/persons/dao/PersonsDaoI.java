package garageguru.persons.dao;

import java.util.List;
import garageguru.persons.model.Persons;

import javax.persistence.EntityManager;

public interface PersonsDaoI {
	void setEm(EntityManager em);
	Persons add(Persons person);
	
	int countAllStaff(String uniqueLink);
	List<Persons> allStaffInJson(Persons allStaff, String uniqueLink);
}
