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
}
