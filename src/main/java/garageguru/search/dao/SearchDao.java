package garageguru.search.dao;

import garageguru.payments.model.Payments;
import garageguru.services.model.Services;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

public class SearchDao implements SearchDaoI {

	private EntityManager em;
	
	@Override
	public void setEm(EntityManager em) {
		this.em = em;
	}
	
	@Override
	public int countCustomerSearch(String confirmationLink, String search) {
		String code = "+254";
		String searchPhone = code+search;
		
		Query query = em.createQuery("select count(id) from Services where confirmationLink=:confirmationLink AND (idNumber=:search OR phone=:searchPhone)");
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("search", search);
		query.setParameter("searchPhone", searchPhone);
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
	}

	@Override
	public List<Services> servicesGivenInJson(Services services, String confirmationLink, String search) {
		String code = "+254";
		String searchPhone = code+search;
		
		Query query = em.createQuery("from Services where confirmationLink=:confirmationLink AND (idNumber=:search OR phone=:searchPhone)");
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("search", search);
		query.setParameter("searchPhone", searchPhone);
		
		return query.getResultList();
	}

	//PAYMENTS
	@Override
	public int countFilterPayments(String confirmationLink, String dateFrom, String dateTo) {
		Query query = em.createQuery("select count(id) from Payments where confirmationLink=:confirmationLink AND (dateUpdated<=:dateTo AND dateUpdated>=:dateFrom)");
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("dateTo", dateTo);
		query.setParameter("dateFrom", dateFrom);
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
	}

	@Override
	public List<Payments> filterPaymentsInJson(Payments payments, String confirmationLink,String dateFrom, String dateTo) {
		Query query = em.createQuery("from Payments where confirmationLink=:confirmationLink AND (dateUpdated<=:dateTo AND dateUpdated>=:dateFrom)");
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("dateTo", dateTo);
		query.setParameter("dateFrom", dateFrom);
		
		return query.getResultList();
	}
	

	//services
	@Override
	public int countFilterServices(String confirmationLink, String dateFrom, String dateTo) {
		Query query = em.createQuery("select count(id) from Services where confirmationLink=:confirmationLink AND (dateUpdated<=:dateTo AND dateUpdated>=:dateFrom)");
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("dateTo", dateTo);
		query.setParameter("dateFrom", dateFrom);
		List result = query.getResultList();

		return ((Long) result.get(0)).intValue();
	}

	@Override
	public List<Services> filterServicesInJson(Services services, String confirmationLink, String dateFrom, String dateTo) {
		Query query = em.createQuery("from Services where confirmationLink=:confirmationLink AND (dateUpdated<=:dateTo AND dateUpdated>=:dateFrom)");
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("dateTo", dateTo);
		query.setParameter("dateFrom", dateFrom);

		return query.getResultList();
	}

}
