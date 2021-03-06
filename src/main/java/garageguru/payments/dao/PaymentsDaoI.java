package garageguru.payments.dao;

import java.util.List;

import garageguru.payments.model.Payments;

import javax.persistence.EntityManager;

public interface PaymentsDaoI {
	void setEm(EntityManager em);
	Payments add(Payments payment);
	
	List<Payments> allPaymentsInJson(Payments allPayments, String confirmationLink);
	
	int countAllPayments(String confirmationLink);
	
	int returnMaxRefNo(String confirmationLink);
	
	int countMiniStatement(String confirmationLink);
	List<Payments> miniStatementInJson(Payments allPayments, String confirmationLink);
	
	//account details
	int countAllCredits(String confirmationLink);
	int countAllDebits(String confirmationLink);
	List sumAllCredits(String confirmationLink);
	List sumAllDebits(String confirmationLink);
	
	//rest
	List<Payments> paymentsList(Payments paymentsList);
	
	int updateCost(String confirmationKey, String serviceNo, Long cost);
	
	List getTotalPayments(String serviceNo);
	
	List getTotalDebits(String serviceNo);
	
	int countTotalCredits(String serviceNo);
	
	int countTotalDebits(String serviceNo);
	
	//DAILY TRANSACTIONS
	int countTodayCredits(String confirmationLink);
	int countTodayDebits(String confirmationLink);
	Long sumTodayCredits(String confirmationLink);
	Long sumTodayDebits(String confirmationLink);
	
	
}
