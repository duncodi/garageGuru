package garageguru.login.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

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
		
		String [] pathCmp = request.getRequestURI().split("/");
		String path = pathCmp[pathCmp.length-1];
		
		if(path.equalsIgnoreCase("logout"))
			this.logout(request, response);
		
		else{
		
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
				//get user level
				String userLevel;
				userLevel = loginBean.userLevel(username);
							
				List uniqueLink = loginBean.returnUniqueLink(username);
				String uniqueLinkString = (String) uniqueLink.get(0); 
				
				//resp.println("Success");
				HttpSession session = request.getSession();
				
				session.setAttribute("user", username);
				session.setAttribute("uniqueLink", uniqueLinkString);
				session.setAttribute("userLevel", userLevel);
				
				//set session to expire after inactive 10 seconds
				session.setMaxInactiveInterval(10*60);
				
				Cookie userNameCookie = new Cookie("user", username);
				response.addCookie(userNameCookie);
				
				Cookie uniqueLinkCookie = new Cookie("uniqueLink", uniqueLinkString);
				response.addCookie(uniqueLinkCookie);
				
				Cookie userLevelCookie = new Cookie("userLevel", userLevel);
				response.addCookie(userLevelCookie);
				
				//get encoded url string
				/*String encodedURL = response.encodeRedirectUrl("./../index.jsp");
				response.sendRedirect(encodedURL);
				*/
				
				loginBean.updateAfterLogin(uniqueLinkString, username);
				
			}
				
			else
				resp.println("Oops! Sorry. The username-password combination din't work");
			
		}
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
	
	private void logout(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		HttpSession session = request.getSession();
		String username = session.getAttribute("user").toString();
		//update logout status
		loginBean.updateAfterLogout(username);
		//unset session
		session.invalidate();
	}
	
}
