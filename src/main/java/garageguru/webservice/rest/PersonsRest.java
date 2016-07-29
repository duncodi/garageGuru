package garageguru.webservice.rest;

import garageguru.persons.bean.PersonsBeanI;

import javax.ejb.EJB;
import javax.servlet.http.HttpSession;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/registerPersons")
public class PersonsRest {
	@EJB
	private PersonsBeanI personsBean;
	
	@GET
	@Path("list")
	@Produces(MediaType.APPLICATION_JSON)
	public Response list(){
		return Response.ok().entity(personsBean.allStaffList()).build();
		
	}
}
