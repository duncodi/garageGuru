package garageguru.users.action;

import garageguru.common.model.CommonFields;
import garageguru.garages.model.Garages;
import garageguru.persons.model.Persons;
import garageguru.users.bean.UsersBeanI;
import garageguru.users.model.Users;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@SuppressWarnings("serial")
@WebServlet("/users/*")
public class UsersAction extends HttpServlet{
	
	@EJB
	private UsersBeanI usersBean;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		//get all our garage staff
		HttpSession session = request.getSession();
		String uniqueLink = session.getAttribute("uniqueLink").toString();
		
		this.users(response, uniqueLink);
	}
	
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
		
		String username, password, confirmationKey, userlevel, personId, garageId;
		int loggedIn, activeStatus;
		
		HttpSession session = request.getSession();
		confirmationKey = session.getAttribute("uniqueLink").toString();
		
		username = request.getParameter("username").toLowerCase().trim();
		password = request.getParameter("password");
		password = hash(password);
		personId = request.getParameter("personId");
		//garageId = request.getParameter("garageId"); TODO
		userlevel = "User";
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
		user.setConfirmationLink(confirmationKey);
		
		usersBean.add(user);
		
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
	public void users(HttpServletResponse response, String uniqueLink) throws ServletException, IOException {
		PrintWriter resp = response.getWriter();
		resp.println(usersBean.allUsersInJson(uniqueLink));
		
	}
}
