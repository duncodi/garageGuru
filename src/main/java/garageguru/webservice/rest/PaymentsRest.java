package garageguru.webservice.rest;

import garageguru.payments.bean.PaymentsBeanI;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/paymentsRest")
public class PaymentsRest {
	@EJB
	private PaymentsBeanI paymentsBean;
	
	@GET
	@Path("list")
	@Produces(MediaType.APPLICATION_JSON)
	public Response list(){
		return Response.ok().entity(paymentsBean.paymentsList()).build();
	}
}
