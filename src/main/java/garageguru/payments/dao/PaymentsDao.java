package garageguru.payments.dao;

import java.text.SimpleDateFormat;
import java.util.Calendar;
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
		String date = this.returnDate();
		Query query = em.createQuery("select count(id) from Payments where confirmationLink=:confirmationLink AND dateUpdated=:dateUpdated");
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("dateUpdated", date);
		
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
	}

	@Override
	public List<Payments> miniStatementInJson(Payments allPayments, String confirmationLink) {
		String date = this.returnDate();
		Query query = em.createQuery("from Payments where confirmationLink=:confirmationLink AND dateUpdated=:dateUpdated");
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("dateUpdated", date);
		
		return query.getResultList();
	}
	//////////END MINI STATEMENT

	//ACCOUNT DETAILS
	@Override
	public int countAllCredits(String confirmationLink) {
		String transactionType = "Credit";
		Query query = em.createQuery("select count(id) from Payments where transactionType=:transactionType AND confirmationLink=:confirmationLink");
		query.setParameter("transactionType", transactionType);
		query.setParameter("confirmationLink", confirmationLink);
		
		List result = query.getResultList();		
		return ((Long) result.get(0)).intValue();
	}

	@Override
	public int countAllDebits(String confirmationLink) {
		String transactionType = "Debit";
		Query query = em.createQuery("select count(id) from Payments where transactionType=:transactionType AND confirmationLink=:confirmationLink");
		query.setParameter("transactionType", transactionType);
		query.setParameter("confirmationLink", confirmationLink);
		
		List result = query.getResultList();		
		return ((Long) result.get(0)).intValue();
	}

	@Override
	public List sumAllCredits(String confirmationLink) {
		String transactionType = "Credit";
		Query query = em.createQuery("select sum(amount) from Payments where transactionType=:transactionType AND confirmationLink=:confirmationLink");
		query.setParameter("transactionType", transactionType);
		query.setParameter("confirmationLink", confirmationLink);
		
		return query.getResultList();
	}

	@Override
	public List sumAllDebits(String confirmationLink) {
		String transactionType = "Debit";
		Query query = em.createQuery("select sum(amount) from Payments where transactionType=:transactionType AND confirmationLink=:confirmationLink");
		query.setParameter("transactionType", transactionType);
		query.setParameter("confirmationLink", confirmationLink);
		
		return query.getResultList();
	}

	//rest
	@Override
	public List<Payments> paymentsList(Payments paymentsList) {
		Query query = em.createQuery("from Payments");
		
		return query.getResultList();
	}

	@Override
	public int updateCost(String confirmationKey, String serviceNo, Long cost) {
		String serviceComplete = "No";
		Query query = em.createQuery("update Services set cost=:cost where confirmationLink=:confirmationKey AND serviceNo=:serviceNo AND serviceComplete=:serviceComplete");
		query.setParameter("cost", cost);
		query.setParameter("confirmationKey", confirmationKey);
		query.setParameter("serviceNo", serviceNo);
		query.setParameter("serviceComplete", serviceComplete);
		return query.executeUpdate();
	}

	@Override
	public List getTotalPayments(String serviceNo) {
		String type = "Credit";
		Query query = em.createQuery("select sum(amount) from Payments where serviceNo=:serviceNo AND transactionType=:type");
		query.setParameter("serviceNo", serviceNo);
		query.setParameter("type", type);
		
		return query.getResultList();
	}

	@Override
	public List getTotalDebits(String serviceNo) {
		String type = "Debit";
		Query query = em.createQuery("select sum(amount) from Payments where serviceNo=:serviceNo AND transactionType=:type");
		query.setParameter("serviceNo", serviceNo);
		query.setParameter("type", type);
		
		return query.getResultList();
	}

	@Override
	public int countTotalCredits(String serviceNo) {
		String type = "Credit";
		Query query = em.createQuery("select count(id) from Payments where serviceNo=:serviceNo AND transactionType=:type");
		query.setParameter("serviceNo", serviceNo);
		query.setParameter("type", type);
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
	}

	@Override
	public int countTotalDebits(String serviceNo) {
		String type = "Debit";
		Query query = em.createQuery("select count(id) from Payments where serviceNo=:serviceNo AND transactionType=:type");
		query.setParameter("serviceNo", serviceNo);
		query.setParameter("type", type);
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
	}

	//TODAY PAYMENTS ANALYSIS
	@Override
	public int countTodayCredits(String confirmationLink) {
		String type = "Credit";
		String date = this.returnDate();

		Query query = em.createQuery("select count(id) from Payments where confirmationLink=:confirmationLink AND dateUpdated=:dateUpdated AND transactionType=:type");
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("dateUpdated", date);
		query.setParameter("type", type);
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
	}

	@Override
	public int countTodayDebits(String confirmationLink) {
		String type = "Debit";
		String date = this.returnDate();

		Query query = em.createQuery("select count(id) from Payments where confirmationLink=:confirmationLink AND dateUpdated=:dateUpdated AND transactionType=:type");
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("dateUpdated", date);
		query.setParameter("type", type);
		List result = query.getResultList();
		
		return ((Long) result.get(0)).intValue();
	}

	@Override
	public Long sumTodayCredits(String confirmationLink) {
		String type = "Credit";
		String date = this.returnDate();
		Query query = em.createQuery("select sum(amount) from Payments where confirmationLink=:confirmationLink AND dateUpdated=:dateUpdated AND transactionType=:type");
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("dateUpdated", date);
		query.setParameter("type", type);
		List result = query.getResultList();
		Long sum = (Long) result.get(0);
		return sum;
	}

	@Override
	public Long sumTodayDebits(String confirmationLink) {
		String type = "Debit";
		String date = this.returnDate();
		Query query = em.createQuery("select sum(amount) from Payments where confirmationLink=:confirmationLink AND dateUpdated=:dateUpdated AND transactionType=:type");
		query.setParameter("confirmationLink", confirmationLink);
		query.setParameter("dateUpdated", date);
		query.setParameter("type", type);
		List result = query.getResultList();
		Long sum = (Long) result.get(0);
		return sum;
	}
	
	public String returnDate(){
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		String dateUpdated = format.format(cal.getTime());
		
		return dateUpdated;
	}

}
