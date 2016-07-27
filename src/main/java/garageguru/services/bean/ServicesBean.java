package garageguru.services.bean;

import garageguru.services.dao.ServicesDaoI;
import garageguru.services.model.Services;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class ServicesBean implements ServicesBeanI{
	@PersistenceContext
	private EntityManager em;
		
	@Inject
	private ServicesDaoI servicesDao;
	
	@PostConstruct
	public void init(){
		servicesDao.setEm(em);
	}
	
	@Override
	public void add(Services service) {
		if(service == null)
			return;
		
		servicesDao.add(service);
	}
	/*
	@Override
	public List<Services> services(String uniqueLink) {
		// TODO Auto-generated method stub
		return servicesDao.services(new Services(), uniqueLink);
	}
	*/
	
	public String allServicesInJson(String uniqueLink) {
		Services filter = new Services();
		
		List<Services> services = servicesDao.allServicesInJson(filter, uniqueLink);
		StringBuilder sb = new StringBuilder();
		sb.append("[");
		
		int count = servicesDao.countAllServices(uniqueLink);
		for(Services allServices : services){
			sb.append(allServices.getJson());
			
			count--;
			if(count>=1)
				sb.append(",");
		}
		sb.append("]");
		return sb.toString();
		
	}

	@Override
	public int returnMaxServiceNo(String confirmationLink) {
		return servicesDao.returnMaxServiceNo(confirmationLink);
	}

	@Override
	public int completeService(String completeService, Long totalPaid, String serviceNo, String confirmationLink) {
		return servicesDao.completeService(completeService, totalPaid, serviceNo, confirmationLink);
	}

	@Override
	public String pendingServicesInJson(String uniqueLink) {
		Services filter = new Services();
		
		List<Services> services = servicesDao.pendingServicesInJson(filter, uniqueLink);
		StringBuilder sb = new StringBuilder();
		sb.append("[");
		
		int count = servicesDao.countPendingServices(uniqueLink);
		for(Services pendingServices : services){
			sb.append(pendingServices.getJson());
			
			count--;
			if(count>=1)
				sb.append(",");
		}
		sb.append("]");
		return sb.toString();
	}

	@Override
	public int deleteService(Long id, String uniqueLink) {
		return servicesDao.deleteService(id, uniqueLink);
	}

	@Override
	public List getCost(String serviceNo) {
		return servicesDao.getCost(serviceNo);
	}
	
	
}
