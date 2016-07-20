package garageguru.persons.dao;

import garageguru.persons.model.Persons;

import javax.persistence.EntityManager;

public interface PersonsDaoI {
	void setEm(EntityManager em);
	Persons add(Persons person);
}
