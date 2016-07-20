package garageguru.persons.action;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import garageguru.common.model.CommonFields;
import garageguru.persons.bean.PersonsBeanI;
import garageguru.persons.model.Persons;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
@WebServlet("/registerPerson/*")
public class PersonsAction extends HttpServlet{
	@EJB
	private PersonsBeanI personsBean;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		Persons person = new Persons();
		
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 1);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		String dateUpdated = format.format(cal.getTime());

		SimpleDateFormat timeformat = new SimpleDateFormat("h:m:s");
		String timeUpdated = timeformat.format(cal.getTime());
		
		// get parameters
		String idNumber, firstName, secondName, phone, email;
		int activeStatus, confirmed;

		idNumber = request.getParameter("idNumber").toUpperCase();
		firstName = request.getParameter("firstName").toUpperCase();
		secondName = request.getParameter("secondName").toUpperCase();
		phone = request.getParameter("phone");
		email = request.getParameter("email").toLowerCase();
		activeStatus = 1;
		confirmed = 1;

		person.setFirstName(firstName);
		person.setSecondName(secondName);
		person.setEmail(email);
		person.setPhone(phone);
		person.setIdNumber(idNumber);

		person.setDateAndStatus(new CommonFields());
		person.getDateAndStatus().setActiveStatus(activeStatus);
		person.getDateAndStatus().setDateUpdated(dateUpdated);
		person.getDateAndStatus().setTimeUpdated(timeUpdated);
		person.setConfirmed(confirmed);
		
		personsBean.add(person);
		
	}
	
}
