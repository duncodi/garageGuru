package garageguru.login.bean;

import java.util.List;

public interface LoginBeanI {
	boolean loginCheck(String username, String password);
	
	List returnUniqueLink(String returnUniqueLink);
	
	int updateAfterLogin(String uniqueLinkString, String username);
	
	String userLevel(String username);
	
	int updateAfterLogout(String username);
}
