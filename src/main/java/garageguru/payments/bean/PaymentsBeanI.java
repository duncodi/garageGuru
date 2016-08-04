package garageguru.payments.bean;

import java.util.List;

import garageguru.payments.model.Payments;

public interface PaymentsBeanI {
	void add(Payments payment);
	
	int returnMaxRefNo(String confirmationLink);
	
	String allPaymentsInJson(String confirmationLink);
	
	String miniStatementInJson(String confirmationLink);
	
	//account details
	int countAllCredits(String confirmationLink);
	int countAllDebits(String confirmationLink);
	List sumAllCredits(String confirmationLink);
	List sumAllDebits(String confirmationLink);
	
	int updateCost(String confirmationKey, String serviceNo, Long cost);

	List<Payments> paymentsList();
	
	List getTotalPayments(String serviceNo);
	
	List getTotalDebits(String serviceNo);
	
	int countTotalCredits(String serviceNo);
	
	int countTotalDebits(String serviceNo);
	
	int countTodayCredits(String confirmationLink);
	int countTodayDebits(String confirmationLink);
	Long sumTodayCredits(String confirmationLink);
	Long sumTodayDebits(String confirmationLink);
}
