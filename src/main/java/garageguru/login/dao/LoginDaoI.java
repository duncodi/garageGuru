package garageguru.login.dao;

import java.util.List;

import javax.persistence.EntityManager;

public interface LoginDaoI {
	void setEm(EntityManager em);
	boolean loginCheck(String username, String password);
	List returnUniqueLink(String username);
	int updateAfterLogin(String uniqueLinkString, String username);
}
