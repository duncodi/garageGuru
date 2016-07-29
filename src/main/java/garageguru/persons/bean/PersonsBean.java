package garageguru.persons.bean;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import garageguru.persons.dao.PersonsDaoI;
import garageguru.persons.model.Persons;
@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class PersonsBean implements PersonsBeanI {
	@PersistenceContext
	private EntityManager em;
		
	@Inject
	private PersonsDaoI personsDao;
	
	@PostConstruct
	public void init(){
		personsDao.setEm(em);
	}
	
	@Override
	public void add(Persons person) {
		if(person == null)
			return;
		
		personsDao.add(person);
	}
	
	public String allStaffInJson(String uniqueLink) {
		Persons filter = new Persons();
		
		List<Persons> staff = personsDao.allStaffInJson(filter, uniqueLink);
		StringBuilder sb = new StringBuilder();
		sb.append("[");
		
		int count = personsDao.countAllStaff(uniqueLink);
		for(Persons allStaff : staff){
			sb.append(allStaff.getJson());
			
			count--;
			if(count>=1)
				sb.append(",");
		}
		sb.append("]");
		return sb.toString();
		
	}

	@Override
	public int deleteStaff(Long id, String uniqueLink) {
		// TODO Auto-generated method stub
		return personsDao.deleteStaff(id, uniqueLink);
	}
	
	//for rest
	@Override
	public List<Persons> allStaffList() {
		// TODO Auto-generated method stub
		return personsDao.allStaffList(new Persons());
	}
}
