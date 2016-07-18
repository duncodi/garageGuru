package gagageguru.garages.action;

import java.io.IOException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import gagageguru.garages.bean.RegistrationBeanI;
import garageguru.common.model.CommonFields;
import garageguru.garages.model.Garages;
import garageguru.persons.model.Persons;
import garageguru.users.model.Users;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
@WebServlet("/completeRegistration/*")
public class CompleteRegistration extends HttpServlet{
	@EJB
	private RegistrationBeanI registrationBean;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		Users user = new Users();
		Persons person = new Persons();
		Garages garage = new Garages();
		
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		String dateUpdated = format.format(cal.getTime());

		SimpleDateFormat timeformat = new SimpleDateFormat("h:m:s");
		String timeUpdated = timeformat.format(cal.getTime());
		
		String username, password, confirmationLink, userlevel;
		int loggedIn, activeStatus;
		
		username = request.getParameter("username").toLowerCase().trim();
		password = request.getParameter("password");
		password = hash(password);
		confirmationLink = request.getParameter("confirmationLink");
		userlevel = "Admin";
		loggedIn = 0;
		activeStatus = 1;
		
		user.setDateAndStatus(new CommonFields());
		user.getDateAndStatus().setActiveStatus(activeStatus);
		user.getDateAndStatus().setDateUpdated(dateUpdated);
		user.getDateAndStatus().setTimeUpdated(timeUpdated);
		
		user.setLoggedIn(loggedIn);
		user.setUsername(username);
		user.setPassword(password);
		user.setUserLevel(userlevel);
		user.setConfirmationLink(confirmationLink);
		
		registrationBean.addAdmin(user);
		
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
