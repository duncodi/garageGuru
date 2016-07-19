package garageguru.login.dao;

import javax.persistence.EntityManager;

public interface LoginDaoI {
	void setEm(EntityManager em);
	boolean loginCheck(String username, String password);
}
