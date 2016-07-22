package garageguru.search.dao;

import java.util.List;

import javax.persistence.EntityManager;

import garageguru.services.model.Services;

public interface SearchDaoI {
	
	void setEm(EntityManager em);
	
	int countCustomerSearch(String confirmationLink, String search);
	
	List<Services> servicesGivenInJson(Services services, String confirmationLink, String search);
	
}
