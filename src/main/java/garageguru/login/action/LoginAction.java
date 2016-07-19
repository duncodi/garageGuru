package garageguru.login.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import garageguru.login.bean.LoginBeanI;
import garageguru.users.model.Users;

import javax.ejb.EJB;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@SuppressWarnings("serial")
@WebServlet("/login/*")
public class LoginAction extends HttpServlet{
	@EJB
	private LoginBeanI loginBean;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		PrintWriter resp = response.getWriter();
		
		Users user = new Users();
		
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		String dateLogin = format.format(cal.getTime());

		SimpleDateFormat timeformat = new SimpleDateFormat("h:m:s");
		String timeLogin = timeformat.format(cal.getTime());
		
		String username, password;
		
		username = request.getParameter("username");
		password = request.getParameter("password");
		password = hash(password);
				
		
		boolean check;
		check = loginBean.loginCheck(username, password);
		
		if(check==true){
			//resp.println("Success");
			HttpSession session = request.getSession();
			session.setAttribute("user", username);
			
			//set session to expire after inactive 10 mins
			session.setMaxInactiveInterval(10*60);
			Cookie userNameCookie = new Cookie("user", username);
			response.addCookie(userNameCookie);
			
			//get encoded url string
			/*String encodedURL = response.encodeRedirectUrl("./../index.jsp");
			response.sendRedirect(encodedURL);
			*/
			
		}
			
		else
			resp.println("Oops! Sorry. The username-password combination din't work");
			
		
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
