package garageguru.services.bean;

import garageguru.services.model.Services;

public interface ServicesBeanI {
	void add(Services service);

	int returnMaxServiceNo(String confirmationLink);
	
	String allServicesInJson(String uniqueLink);
	
	String pendingServicesInJson(String uniqueLink);
	
	int completeService(String completeService, String serviceNo, String confirmationLink);
}
