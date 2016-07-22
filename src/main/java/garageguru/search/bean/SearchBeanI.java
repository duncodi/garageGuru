package garageguru.search.bean;

public interface SearchBeanI {
	int countCustomerSearch(String confirmationLink, String search);
	String servicesGivenInJson(String confirmationLink, String search);
	
	//services filter
	String filterServicesInJson(String confirmationLink, String dateFrom, String dateTo);
	int countFilterServices(String confirmationLink, String dateFrom, String dateTo);
	
	//payments filter
	String filterPaymentsInJson(String confirmationLink, String dateFrom, String dateTo);
	int countFilterPayments(String confirmationLink, String dateFrom, String dateTo);
}
