package garageguru.search.dao;

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

}
