package garageguru.search.dao;

import java.util.List;

import javax.persistence.EntityManager;

import garageguru.payments.model.Payments;
import garageguru.services.model.Services;

public interface SearchDaoI {
	
	void setEm(EntityManager em);
	
	int countCustomerSearch(String confirmationLink, String search);
	
	List<Services> servicesGivenInJson(Services services, String confirmationLink, String search);
	
	//payments
	int countFilterPayments(String confirmationLink, String dateFrom, String dateTo);
	List<Payments> filterPaymentsInJson(Payments payments, String confirmationLink, String dateFrom, String dateTo);
	
	//services
	int countFilterServices(String confirmationLink, String dateFrom, String dateTo);
	List<Services> filterServicesInJson(Services services, String confirmationLink, String dateFrom, String dateTo);
	
	
}
