package garageguru.services.bean;

import java.util.List;

import garageguru.services.model.Services;

public interface ServicesBeanI {
	void add(Services service);

	int returnMaxServiceNo(String confirmationLink);
	
	String allServicesInJson(String uniqueLink);
	
	String pendingServicesInJson(String uniqueLink);
	
	int completeService(String completeService, Long totalPaid, String serviceNo, String confirmationLink);
	
	int deleteService(Long id, String uniqueLink);
	
	List getCost(String serviceNo);
}
