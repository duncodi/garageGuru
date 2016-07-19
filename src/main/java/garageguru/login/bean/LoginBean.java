package garageguru.login.bean;

import garageguru.login.dao.LoginDaoI;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class LoginBean implements LoginBeanI{
	
	@PersistenceContext
	private EntityManager em;
	
	@Inject
	private LoginDaoI loginDao;
	
	@PostConstruct
	public void init(){
		loginDao.setEm(em);
	}
	
	@Override
	public boolean loginCheck(String username, String password) {
		return loginDao.loginCheck(username, password);
	}

}
