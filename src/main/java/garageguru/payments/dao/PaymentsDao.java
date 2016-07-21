package garageguru.payments.dao;

import java.util.List;

import garageguru.payments.model.Payments;

import javax.persistence.EntityManager;
import javax.persistence.Query;

public class PaymentsDao implements PaymentsDaoI {

	private EntityManager em;
	
	@Override
	public void setEm(EntityManager em) {
		this.em = em;
	}

	@Override
	public Payments add(Payments payment) {
		return em.merge(payment);
	}

	@Override
	public List<Payments> allPaymentsInJson(Payments allPayments, String confirmationLink) {
		Query query = em.createQuery("from Payments where confirmationLink=:confirmationLink");
		query.setParameter("confirmationLink", confirmationLink);
		return query.getResultList();
	}
	
	@Override
	public int countAllPayments(String confirmationLink){
		Query query = em.createQuery("select count(id) from Payments where confirmationLink=:confirmationLink");
		query.setParameter("confirmationLink", confirmationLink);
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
		
	}
	
	@Override
	public int returnMaxRefNo(String confirmationLink) {				
		Query query = em.createQuery("select count(id) from Payments where confirmationLink=:confirmationLink");
		query.setParameter("confirmationLink", confirmationLink);
		List result = query.getResultList();
		return ((Long) result.get(0)).intValue();
	}
	
	//MINI STATEMENT
	@Override
	public int countMiniStatement(String confirmationLink) {
		Query query = em.createQuery("select count(id) from Payments where confirmationLink=:confirmationLink");
		query.setParameter("confirmationLink", confirmationLink);
		//query.setMaxResults(3);
		
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
	}

	@Override
	public List<Payments> miniStatementInJson(Payments allPayments, String confirmationLink) {
		Query query = em.createQuery("from Payments where confirmationLink=:confirmationLink");
		query.setParameter("confirmationLink", confirmationLink);
		//query.setMaxResults(4);
		return query.getResultList();
	}
	//////////END MINI STATEMENT

	
}
