package garageguru.payments.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import gagageguru.registration.bean.RegistrationBeanI;
import garageguru.common.model.CommonFields;
import garageguru.garages.model.Garages;
import garageguru.payments.bean.PaymentsBeanI;
import garageguru.payments.model.Payments;
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
		
		/*int maxServiceNo = paymentsBean.returnMaxServiceNo(uniqueLink);
		
		resp.println("Size: "+maxServiceNo);
		*/
		
		String [] pathCmp = request.getRequestURI().split("/");
		String path = pathCmp[pathCmp.length-1];
		
		if(path.equalsIgnoreCase("ministatement")){
			
			this.ministatement(response, uniqueLink);
			
		}else{
			this.payments(response, uniqueLink);
		}
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
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
		narration = request.getParameter("narration");
		completeService = request.getParameter("completeService");
		activeStatus = 1;
		transactionType = "Credit";
		
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
		
		paymentsBean.add(payment);
		servicesBean.completeService(completeService, serviceNo, confirmationKey);
		
	}
	
	public void payments(HttpServletResponse response, String uniqueLink) throws ServletException, IOException {
		PrintWriter resp = response.getWriter();
		resp.println(paymentsBean.allPaymentsInJson(uniqueLink));
		
	}
	
	public void ministatement(HttpServletResponse response, String uniqueLink) throws ServletException, IOException {
		PrintWriter resp = response.getWriter();
		resp.println(paymentsBean.miniStatementInJson(uniqueLink));
		
	}
}
