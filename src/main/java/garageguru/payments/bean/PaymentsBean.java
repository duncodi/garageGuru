package garageguru.payments.bean;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import garageguru.payments.dao.PaymentsDaoI;
import garageguru.payments.model.Payments;
import garageguru.payments.model.Payments;

@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class PaymentsBean implements PaymentsBeanI {
	@PersistenceContext
	private EntityManager em;
	
	@Inject
	private PaymentsDaoI paymentsDao;
	
	@PostConstruct
	public void init(){
		paymentsDao.setEm(em);
	}
	
	
	@Override
	public void add(Payments payment) {
		if(payment == null)
			return;
		paymentsDao.add(payment);					
	}

	@Override
	public String allPaymentsInJson(String confirmationLink) {
		Payments filter = new Payments();
		
		List<Payments> payments = paymentsDao.allPaymentsInJson(filter, confirmationLink);
		StringBuilder sb = new StringBuilder();
		sb.append("[");
		
		int count = paymentsDao.countAllPayments(confirmationLink);
		for(Payments allPayments : payments){
			sb.append(allPayments.getJson());
			
			count--;
			if(count>=1)
				sb.append(",");
		}
		sb.append("]");
		return sb.toString();
	}


	@Override
	public int returnMaxRefNo(String confirmationLink) {
		return paymentsDao.returnMaxRefNo(confirmationLink);
	}


	@Override
	public String miniStatementInJson(String confirmationLink) {
		Payments filter = new Payments();
		
		List<Payments> payments = paymentsDao.miniStatementInJson(filter, confirmationLink);
		StringBuilder sb = new StringBuilder();
		sb.append("[");
		
		int count = paymentsDao.countMiniStatement(confirmationLink);
		for(Payments miniStatement : payments){
			sb.append(miniStatement.getJson());
			
			count--;
			if(count>=1)
				sb.append(",");
		}
		sb.append("]");
		return sb.toString();
	}


	@Override
	public int countAllCredits(String confirmationLink) {
		return paymentsDao.countAllCredits(confirmationLink);
	}


	@Override
	public int countAllDebits(String confirmationLink) {
		return paymentsDao.countAllDebits(confirmationLink);
	}


	@Override
	public List sumAllCredits(String confirmationLink) {
		return paymentsDao.sumAllCredits(confirmationLink);
	}


	@Override
	public List sumAllDebits(String confirmationLink) {
		return paymentsDao.sumAllDebits(confirmationLink);
	}
	
	
	//REST
	@Override
	public List<Payments> paymentsList() {
		// TODO Auto-generated method stub
		return paymentsDao.paymentsList(new Payments());
	}


	@Override
	public int updateCost(String confirmationKey, String serviceNo, Long cost) {
		return paymentsDao.updateCost(confirmationKey, serviceNo, cost);
	}


	@Override
	public List getTotalPayments(String serviceNo) {
		return paymentsDao.getTotalPayments(serviceNo);
	}


	@Override
	public List getTotalDebits(String serviceNo) {
		return paymentsDao.getTotalDebits(serviceNo);
	}


	@Override
	public int countTotalCredits(String serviceNo) {
		return paymentsDao.countTotalCredits(serviceNo);
	}


	@Override
	public int countTotalDebits(String serviceNo) {
		// TODO Auto-generated method stub
		return paymentsDao.countTotalDebits(serviceNo);
	}
	
}
