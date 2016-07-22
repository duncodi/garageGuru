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
@WebServlet("/filterservices/*")
public class FilterServicesAction extends HttpServlet{
	@EJB
	private SearchBeanI searchBean;
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		PrintWriter resp = response.getWriter();
		String confirmationLink, dateFrom, dateTo;
		HttpSession session = request.getSession();
		confirmationLink = session.getAttribute("uniqueLink").toString();
		
		dateFrom = request.getParameter("dateFrom"); 
		dateTo = request.getParameter("dateTo"); 
		
		int count = searchBean.countFilterServices(confirmationLink, dateFrom, dateTo);
		
		if(count==0){
			resp.println(count);
		}else{
			this.filterServices(response, confirmationLink, dateFrom, dateTo);
		}
	}
	
	public void filterServices(HttpServletResponse response, String confirmationLink, String dateFrom, String dateTo) throws ServletException, IOException{
		PrintWriter resp = response.getWriter();
		resp.println(searchBean.filterServicesInJson(confirmationLink, dateFrom, dateTo));
	}
}
