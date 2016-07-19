package gagageguru.registration.action;

import gagageguru.registration.bean.RegistrationBeanI;
import garageguru.common.model.CommonFields;
import garageguru.garages.model.Garages;
import garageguru.persons.model.Persons;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.Random;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
@WebServlet("/register/*")
public class RegistrationAction extends HttpServlet {
	private Persons person;
	@EJB
	private RegistrationBeanI registrationBean;

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter resp = response.getWriter();
		
		String [] pathCmp = request.getRequestURI().split("/");
		String path = pathCmp[pathCmp.length-1];
		
		if(path.equalsIgnoreCase("confirmation")){
			String confirmationKey;
			confirmationKey = request.getParameter("challenge");
			
			//get single person id
			List getPersonId = registrationBean.getPersonId(confirmationKey);
			//get garageId
			List getGarageId = registrationBean.getGarageId(confirmationKey);
			
			Long personId, garageId;
			personId = (Long) getPersonId.get(0);
			garageId = (Long) getGarageId.get(0);
			
			//confirm and update Garage too
			registrationBean.confirmation(confirmationKey, personId);
			
			resp.println(""
					+ "<h2>Create an administrator account!</h2>"
					+ "<p>Input Username and Password</p>"
					+ "<form method='post' role='form'>"
					
					+ "<input type='hidden' class='form-control' id='garageId' name='garageId' value='"+garageId+"'>"
					+ "<input type='hidden' class='form-control' id='ownerId' name='ownerId' value='"+personId+"'>"
					+ "<input type='hidden' class='form-control' id='confirmationKey' name='confirmationKey' value='"+confirmationKey+"'>"
					
					+ "<div class='form-group'>"
					+ "<label class='sr-only' for='username'>New Username: </label>"
					+ "<input type='text' class='form-control' id='username' name='username' placeholder='New Username'>"
					+ "</div>"
					+ "<div class='form-group'>"
					+ "<label class='sr-only' for='password'>New Password: </label>"
					+ "<input type='password' class='form-control' id='password' name='password' placeholder='New Password'>"
					+ "</div>"
					+ "<div class='form-group'>"
					+ "<label class='sr-only' for='confirmPassword'>Confirm Password: </label>"
					+ "<input type='password' class='form-control' id='confirmPassword' name='confirmPassword' placeholder='Confirm Password'>"
					+ "</div>"
					+ "</form>"
					+ "<a class='btn btn-primary btn-block' onclick='completeRegistration();'>Complete Registration</a>");
			
		}
		else{
		      response.setContentType("text/html");

		      // New location to be redirected
		      String site = new String("localhost:8080/garageGuru/register.jsp");
		      response.setHeader("Location", site);  
		}
		
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		Garages garage = new Garages();
		Persons person = new Persons();

		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		String dateUpdated = format.format(cal.getTime());

		SimpleDateFormat timeformat = new SimpleDateFormat("h:m:s");
		String timeUpdated = timeformat.format(cal.getTime());

		Random randomGenerator = new Random();
		int randomInt = randomGenerator.nextInt(10000);

		// get parameters
		String idNumber, firstName, secondName, phone, email, garageName, location, country, garageDescription, address, dateConfirmed, timeConfirmed, confirmationLink;
		int activeStatus, confirmed;

		idNumber = request.getParameter("idNumber").toUpperCase();
		firstName = request.getParameter("firstName").toUpperCase();
		secondName = request.getParameter("secondName").toUpperCase();
		phone = request.getParameter("phone");
		email = request.getParameter("email").toLowerCase();
		garageName = request.getParameter("garageName").toUpperCase();
		address = request.getParameter("address").toUpperCase();
		location = request.getParameter("location").toUpperCase();
		country = request.getParameter("country").toUpperCase();
		garageDescription = request.getParameter("garageDescription").toLowerCase();
		activeStatus = 1;
		confirmed = 0;
		dateConfirmed = null;
		timeConfirmed = null;
		confirmationLink = hash(randomInt + dateUpdated + timeUpdated);

		person.setFirstName(firstName);
		person.setSecondName(secondName);
		person.setEmail(email);
		person.setPhone(phone);
		person.setIdNumber(idNumber);

		person.setDateAndStatus(new CommonFields());
		person.getDateAndStatus().setActiveStatus(activeStatus);
		person.getDateAndStatus().setDateUpdated(dateUpdated);
		person.getDateAndStatus().setTimeUpdated(timeUpdated);
		person.setConfirmationLink(confirmationLink);
		person.setConfirmed(confirmed);

		// garage addition
		garage.setAddress(address);
		garage.setConfirmationLink(confirmationLink);
		garage.setConfirmed(confirmed);
		garage.setDateAndStatus(new CommonFields());
		garage.getDateAndStatus().setActiveStatus(activeStatus);
		garage.getDateAndStatus().setDateUpdated(dateUpdated);
		garage.getDateAndStatus().setTimeUpdated(timeUpdated);
		garage.setDateConfirmed(dateConfirmed);
		garage.setGarageDescription(garageDescription);
		garage.setGarageName(garageName);
		garage.setLocation(location);
		garage.setCountry(country);
		garage.setTimeConfirmed(timeConfirmed);

		registrationBean.add(person);
		registrationBean.addGarage(garage);

	}

	private static String hash(String s) {
		try {
			MessageDigest m = MessageDigest.getInstance("SHA-512");
			m.update(s.getBytes(), 0, s.length());
			BigInteger i = new BigInteger(1, m.digest());
			return String.format("%1$032x", i);
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return null;
	}

}
