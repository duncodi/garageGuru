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

	List<Payments> paymentsList();
}
