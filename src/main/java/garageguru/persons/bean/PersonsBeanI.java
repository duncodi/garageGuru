package garageguru.persons.bean;

import java.util.List;
import garageguru.persons.model.Persons;

public interface PersonsBeanI {
	void add(Persons person);

	String allStaffInJson(String uniqueLink);
	
	//List<Persons> staff(String uniqueLink);
}
