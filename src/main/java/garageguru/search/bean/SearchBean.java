package garageguru.search.bean;

import java.util.List;

import garageguru.search.dao.SearchDaoI;
import garageguru.services.model.Services;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class SearchBean implements SearchBeanI{
	
	@PersistenceContext
	private EntityManager em;
		
	@Inject
	private SearchDaoI searchDao;
	
	@PostConstruct
	public void init(){
		searchDao.setEm(em);
	}

	@Override
	public int countCustomerSearch(String confirmationLink, String search) {
		return searchDao.countCustomerSearch(confirmationLink, search);
	}

	@Override
	public String servicesGivenInJson(String confirmationLink, String search) {
		Services filter = new Services();
		
		List<Services> services = searchDao.servicesGivenInJson(filter, confirmationLink, search);
		StringBuilder sb = new StringBuilder();
		sb.append("[");
		
		int count = searchDao.countCustomerSearch(confirmationLink, search);
		for(Services servicesGiven : services){
			sb.append(servicesGiven.getJson());
			
			count--;
			if(count>=1)
				sb.append(",");
		}
		sb.append("]");
		return sb.toString();
	}
	
}
