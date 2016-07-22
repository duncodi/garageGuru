package garageguru.search.action;

import garageguru.search.bean.SearchBeanI;

import java.io.IOException;
import java.io.PrintWriter;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@SuppressWarnings("serial")
@WebServlet("/search/*")
public class SearchAction extends HttpServlet{
	@EJB
	private SearchBeanI searchBean;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		PrintWriter resp = response.getWriter();
		String confirmationLink, search;
		HttpSession session = request.getSession();
		confirmationLink = session.getAttribute("uniqueLink").toString();
		search = request.getParameter("search").toUpperCase(); 
		
		int count = searchBean.countCustomerSearch(confirmationLink, search);
		
		if(count==0){
			resp.println(count);
		}else{
			this.searchCustomer(response, confirmationLink, search);
		}
	}
	
	public void searchCustomer(HttpServletResponse response, String confirmationLink, String search) throws ServletException, IOException{
		PrintWriter resp = response.getWriter();
		resp.println(searchBean.servicesGivenInJson(confirmationLink, search));
	}
	
}
