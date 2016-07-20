package garageguru.persons.dao;

import garageguru.persons.model.Persons;

import javax.persistence.EntityManager;

public class PersonsDao implements PersonsDaoI{
	private EntityManager em;
	
	@Override
	public void setEm(EntityManager em) {
		this.em = em;
	}

	@Override
	public Persons add(Persons person) {
		return em.merge(person);
	}

}
