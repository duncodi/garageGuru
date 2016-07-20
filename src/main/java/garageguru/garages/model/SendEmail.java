package garageguru.garages.model;
import garageguru.persons.model.Persons;

import javax.enterprise.event.Observes;

public class SendEmail {
	public void send(@Observes Persons persons){
		System.out.println("An email has been sent to you via "+persons.getEmail());
	}
}
