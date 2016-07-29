package garageguru.payments.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import garageguru.common.model.CommonFields;
import garageguru.garages.model.Garages;
import garageguru.payments.bean.PaymentsBeanI;
import garageguru.payments.model.Payments;
import garageguru.registration.bean.RegistrationBeanI;
import garageguru.services.bean.ServicesBean;
import garageguru.services.bean.ServicesBeanI;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@SuppressWarnings("serial")
@WebServlet("/payments/*")
public class PaymentsAction extends HttpServlet{
	@EJB
	private PaymentsBeanI paymentsBean;
	
	@EJB
	private RegistrationBeanI registrationBean;
	
	@EJB
	private ServicesBeanI servicesBean;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		HttpSession session = request.getSession();
		String uniqueLink = session.getAttribute("uniqueLink").toString();
		
		String [] pathCmp = request.getRequestURI().split("/");
		String path = pathCmp[pathCmp.length-1];
		
		if(path.equalsIgnoreCase("ministatement")){
			this.ministatement(response, uniqueLink);	
		}
		else if(path.equalsIgnoreCase("accountdetails")){
			this.accountDetails(response, uniqueLink);
		}
		else if(path.equalsIgnoreCase("newPayment")){
			this.services(response, uniqueLink);
		}
		else{
			this.payments(response, uniqueLink);
		}
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		String [] pathCmp = request.getRequestURI().split("/");
		String path = pathCmp[pathCmp.length-1];
		
		if(path.equalsIgnoreCase("updateCost")){
			this.updateCost(request, response);	
		}
		else{
			Payments payment = new Payments();
			Garages garage = new Garages();
					
			Calendar cal = Calendar.getInstance();
			cal.add(Calendar.DATE, 1);
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			String dateUpdated = format.format(cal.getTime());

			SimpleDateFormat timeformat = new SimpleDateFormat("h:m:s");
			String timeUpdated = timeformat.format(cal.getTime());
			
			
			String serviceNo, narration, completeService, postedBy, confirmationKey, transactionType;
			int activeStatus;
			Long amount, refNo;
			
			HttpSession session = request.getSession();
			confirmationKey = session.getAttribute("uniqueLink").toString();
			postedBy = session.getAttribute("user").toString();
			
			// get garageId
			List getGarageId = registrationBean.getGarageId(confirmationKey);
			Long garageId;
			garageId = (Long) getGarageId.get(0);
			
			//count to get maximum service id for this garage
			int maxRefNo = paymentsBean.returnMaxRefNo(confirmationKey); //counts
			refNo = (long) (maxRefNo+1);
			String constStr = "GPS";
			String refNoStr = constStr+(garageId.toString())+"-"+(refNo.toString()); //create a garage-custom service No.
			
			amount = Long.parseLong(request.getParameter("amount"));
			serviceNo = request.getParameter("serviceNo").toUpperCase();
			serviceNo = serviceNo.trim();
			narration = request.getParameter("narration").toUpperCase();
			//completeService = request.getParameter("completeService");
			activeStatus = 1;
			transactionType = request.getParameter("transactionType");
			
			payment.setDateAndStatus(new CommonFields());
			payment.getDateAndStatus().setActiveStatus(activeStatus);
			payment.getDateAndStatus().setDateUpdated(dateUpdated);
			payment.getDateAndStatus().setTimeUpdated(timeUpdated);
			
			payment.setTransactionType(transactionType);
			payment.setRefNo(refNoStr);
			payment.setAmount(amount);
			payment.setServiceNo(serviceNo);
			payment.setNarration(narration);
			payment.setPostedBy(postedBy);	
			payment.setConfirmationLink(confirmationKey);
			
			
			//check if amount<=cost;
			Long totalPaid, totalCost, credits, debits;
			totalCost = this.getCost(response, serviceNo);						
			credits = this.getTotalPayments(response, serviceNo);
			debits = this.getTotalDebits(response, serviceNo);
			
			if(transactionType.equalsIgnoreCase("Debit"))
				totalPaid = credits-(amount+debits);
			else
				totalPaid = (credits+amount)-debits;
			
			
			if(totalPaid<totalCost){
				paymentsBean.add(payment);
				completeService = "No";
				servicesBean.completeService(completeService, totalPaid, serviceNo, confirmationKey);
			}
			else if(totalPaid>=totalCost){
				paymentsBean.add(payment);
				completeService = "Yes";
				servicesBean.completeService(completeService, totalPaid, serviceNo, confirmationKey);
			}
			else{
				paymentsBean.add(payment);
			}
				
		}
		
	}
	
	public void updateCost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		String confirmationKey, serviceNo;
		Long cost;
		HttpSession session = request.getSession();
		confirmationKey = session.getAttribute("uniqueLink").toString();
		serviceNo = request.getParameter("serviceNo");
		cost = Long.parseLong(request.getParameter("cost"));
		paymentsBean.updateCost(confirmationKey, serviceNo, cost);
	}
	
	public Long getCost(HttpServletResponse response, String serviceNo) throws ServletException, IOException {
		List CostLs = servicesBean.getCost(serviceNo);
		Long cost = (Long) CostLs.get(0);
		if(CostLs==null)
			cost = (long) 0;
		
		return cost;
	}
	
	public Long getTotalPayments(HttpServletResponse response, String serviceNo) throws ServletException, IOException {
		int countCredits = paymentsBean.countTotalCredits(serviceNo);
		List totalPaymentsLs = paymentsBean.getTotalPayments(serviceNo);
		Long payments = (Long) totalPaymentsLs.get(0);
		if(countCredits==0)
			payments = (long) 0;
		
		return payments;
	}
	
	public Long getTotalDebits(HttpServletResponse response, String serviceNo) throws ServletException, IOException {
		int countDebits = paymentsBean.countTotalDebits(serviceNo);
		List totalDebitsLs = paymentsBean.getTotalDebits(serviceNo);
		Long debits = (Long) totalDebitsLs.get(0);
		
		if(countDebits==0)
			debits = (long) 0;
		
		return debits;
	}
	
	public void services(HttpServletResponse response, String uniqueLink) throws ServletException, IOException {
		PrintWriter resp = response.getWriter();
		resp.println(servicesBean.pendingServicesInJson(uniqueLink));
	}
	
	public void payments(HttpServletResponse response, String uniqueLink) throws ServletException, IOException {
		PrintWriter resp = response.getWriter();
		resp.println(paymentsBean.allPaymentsInJson(uniqueLink));
	}
	
	public void ministatement(HttpServletResponse response, String uniqueLink) throws ServletException, IOException {
		PrintWriter resp = response.getWriter();
		resp.println(paymentsBean.miniStatementInJson(uniqueLink));
	}
	
	public void accountDetails(HttpServletResponse response, String uniqueLink) throws ServletException, IOException {
		PrintWriter resp = response.getWriter();
		List sumCredits = paymentsBean.sumAllCredits(uniqueLink);
		List sumDebits = paymentsBean.sumAllDebits(uniqueLink);
		int countCredits = paymentsBean.countAllCredits(uniqueLink);
		int countDebits = paymentsBean.countAllDebits(uniqueLink);
		
		Long totalCR = (Long) sumCredits.get(0);
		if(countCredits==0)
			totalCR = (long) 0;
		
		Long totalDR = (Long) sumDebits.get(0);
		if(countDebits==0)
			totalDR = (long) 0;
		
		//json
		resp.print("[");
		
		resp.print("{");
		resp.print("\"");resp.print("sumCredits");resp.print("\"");resp.print(": "); resp.print("\"");resp.print(totalCR);resp.print("\", ");
		resp.print("\"");resp.print("sumDebits");resp.print("\"");resp.print(": "); resp.print("\"");resp.print(totalDR);resp.print("\", ");
		resp.print("\"");resp.print("countCredits");resp.print("\"");resp.print(": "); resp.print("\"");resp.print(countCredits);resp.print("\", ");
		resp.print("\"");resp.print("countDebits");resp.print("\"");resp.print(": "); resp.print("\"");resp.print(countDebits);resp.print("\"");
		resp.print("}");
		
		resp.print("]");
	}
}
