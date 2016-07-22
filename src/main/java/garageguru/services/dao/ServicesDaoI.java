package garageguru.services.dao;

import garageguru.services.model.Services;

import java.util.List;

import javax.persistence.EntityManager;

public interface ServicesDaoI {
	void setEm(EntityManager em);
	Services add(Services service);
	
	int countAllServices(String uniqueLink);
	
	int countPendingServices(String uniqueLink);
	
	int returnMaxServiceNo(String confirmationLink);
	
	List<Services> allServicesInJson(Services allServices, String uniqueLink);
	List<Services> pendingServicesInJson(Services pendingServices, String uniqueLink);
	
	int completeService(String completeService, String serviceNo, String confirmationLink);
}
