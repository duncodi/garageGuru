package garageguru.payments.bean;

import garageguru.payments.model.Payments;

public interface PaymentsBeanI {
	void add(Payments payment);
	
	int returnMaxRefNo(String confirmationLink);
	
	String allPaymentsInJson(String confirmationLink);
	
	String miniStatementInJson(String confirmationLink);
}
