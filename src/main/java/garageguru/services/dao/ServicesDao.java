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
	public int completeService(String completeService, Long totalPaid, String serviceNo, String confirmationLink) {
		Query query = em.createQuery("update Services set serviceComplete=:serviceComplete, totalPaid=:totalPaid where confirmationLink=:confirmationLink AND serviceNo=:serviceNo");
		query.setParameter("serviceComplete", completeService);
		query.setParameter("totalPaid", totalPaid);
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("serviceNo", serviceNo);
		
		return query.executeUpdate();
	}

	@Override
	public int countPendingServices(String uniqueLink) {
		String serviceComplete = "No";
		Query query = em.createQuery("select count(id) from Services where confirmationLink=:uniqueLink AND (serviceComplete=:serviceComplete OR totalPaid>cost)");
		query.setParameter("uniqueLink", uniqueLink);
		query.setParameter("serviceComplete", serviceComplete);
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
	}

	@Override
	public List<Services> pendingServicesInJson(Services pendingServices, String uniqueLink) {
		String serviceComplete = "No";
		Query query = em.createQuery("from Services where confirmationLink=:uniqueLink AND (serviceComplete=:serviceComplete OR totalPaid>cost)");
		query.setParameter("uniqueLink", uniqueLink);
		query.setParameter("serviceComplete", serviceComplete);
		
		return query.getResultList();
	}

	@Override
	public int deleteService(Long id, String uniqueLink) {
		String serviceComplete = "No";
		Query query = em.createQuery("delete from Services where id=:id and confirmationLink=:uniqueLink and serviceComplete=:serviceComplete");
		query.setParameter("id", id);
		query.setParameter("uniqueLink", uniqueLink);
		query.setParameter("serviceComplete", serviceComplete);
		return query.executeUpdate();
	}

	@Override
	public List getCost(String serviceNo) {
		Query query = em.createQuery("select cost from Services where serviceNo=:serviceNo");
		query.setParameter("serviceNo", serviceNo);
		return query.getResultList();
	}
}
