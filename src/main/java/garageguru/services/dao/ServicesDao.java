package garageguru.services.dao;

import garageguru.services.model.Services;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

public class ServicesDao implements ServicesDaoI{
	private EntityManager em;
	
	@Override
	public void setEm(EntityManager em) {
		this.em = em;
	}

	@Override
	public Services add(Services service) {
		return em.merge(service);
	}

	@Override
	public List<Services> allServicesInJson(Services allServices, String uniqueLink) {
		Query query = em.createQuery("from Services where confirmationLink=:uniqueLink");
		query.setParameter("uniqueLink", uniqueLink);
		
		return query.getResultList();
	}
	
	@Override
	public int countAllServices(String uniqueLink){
		Query query = em.createQuery("select count(id) from Services where confirmationLink=:uniqueLink");
		query.setParameter("uniqueLink", uniqueLink);
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
		
	}
	
	@Override
	public int returnMaxServiceNo(String confirmationLink) {				
		Query query = em.createQuery("select count(id) from Services where confirmationLink=:confirmationLink");
		query.setParameter("confirmationLink", confirmationLink);
		List result = query.getResultList();
		return ((Long) result.get(0)).intValue();
	}

	@Override
	public int completeService(String completeService, String serviceNo, String confirmationLink) {
		Query query = em.createQuery("update Services set serviceComplete=:serviceComplete where confirmationLink=:confirmationLink AND serviceNo=:serviceNo");
		query.setParameter("serviceComplete", completeService);
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("serviceNo", serviceNo);
		
		return query.executeUpdate();
	}
}
