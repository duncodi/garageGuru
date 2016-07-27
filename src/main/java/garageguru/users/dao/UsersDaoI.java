package garageguru.users.dao;

import garageguru.users.model.Users;

import java.util.List;

import javax.persistence.EntityManager;

public interface UsersDaoI {
	void setEm(EntityManager em);
	Users add(Users user);
	
	int countAllUsers(String uniqueLink);
	List<Users> allUsersInJson(Users allUsers, String uniqueLink);
	
	int deleteUser(Long id);
}
