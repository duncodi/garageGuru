package garageguru.services.action;

import garageguru.common.model.CommonFields;
import garageguru.garages.model.Garages;
import garageguru.persons.model.Persons;
import garageguru.registration.bean.RegistrationBeanI;
import garageguru.services.bean.ServicesBeanI;
import garageguru.services.model.Services;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@SuppressWarnings("serial")
@WebServlet("/services/*")
public class ServicesAction extends HttpServlet {
	@EJB
	private ServicesBeanI servicesBean;
	
	@EJB
	private RegistrationBeanI registrationBean;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		HttpSession session = request.getSession();
		String uniqueLink = session.getAttribute("uniqueLink").toString();
		
		String [] pathCmp = request.getRequestURI().split("/");
		String path = pathCmp[pathCmp.length-1];
		
		if(path.equalsIgnoreCase("pending")){
			
			this.pendingServices(response, uniqueLink);
			
		}else{
			this.services(response, uniqueLink);
		}
		
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		Services service = new Services();
		Garages garage = new Garages();
				
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		String dateUpdated = format.format(cal.getTime());

		SimpleDateFormat timeformat = new SimpleDateFormat("h:m:s");
		String timeUpdated = timeformat.format(cal.getTime());
		
		
		String regNo, idNumber, fullName, phone, description, postedBy, confirmationKey, serviceComplete;
		int activeStatus;
		Long serviceNo;
		
		HttpSession session = request.getSession();
		confirmationKey = session.getAttribute("uniqueLink").toString();
		postedBy = session.getAttribute("user").toString();
		
		// get garageId
		List getGarageId = registrationBean.getGarageId(confirmationKey);
		Long garageId;
		garageId = (Long) getGarageId.get(0);
		
		//count to get maximum service id for this garage
		int maxServiceNo = servicesBean.returnMaxServiceNo(confirmationKey); //counts
		serviceNo = (long) (maxServiceNo+1);
		String constStr = "GSV";
		String serviceNoStr = constStr+(garageId.toString())+"-"+(serviceNo.toString()); //create a garage-custom service No.
		
		regNo = request.getParameter("regNo").toUpperCase().trim();
		idNumber = request.getParameter("idNumber").toUpperCase();
		fullName = request.getParameter("fullName").toUpperCase();
		phone = request.getParameter("phone");
		String code = "+254";
		phone = code+phone;
		description = request.getParameter("description").toUpperCase();
		activeStatus = 1;
		serviceComplete = "No";
		
		service.setDateAndStatus(new CommonFields());
		service.getDateAndStatus().setActiveStatus(activeStatus);
		service.getDateAndStatus().setDateUpdated(dateUpdated);
		service.getDateAndStatus().setTimeUpdated(timeUpdated);
		
		service.setServiceNo(serviceNoStr);
		service.setRegNo(regNo);
		service.setIdNumber(idNumber);
		service.setFullName(fullName);
		service.setPhone(phone);
		service.setDescription(description);
		service.setPostedBy(postedBy);	
		service.setConfirmationLink(confirmationKey);
		service.setServiceComplete(serviceComplete);
		
		servicesBean.add(service);
		
	}
	public void services(HttpServletResponse response, String uniqueLink) throws ServletException, IOException {
		PrintWriter resp = response.getWriter();
		resp.println(servicesBean.allServicesInJson(uniqueLink));
		
	}
	
	public void pendingServices(HttpServletResponse response, String uniqueLink) throws ServletException, IOException {
		PrintWriter resp = response.getWriter();
		resp.println(servicesBean.pendingServicesInJson(uniqueLink));
		
	}
}
