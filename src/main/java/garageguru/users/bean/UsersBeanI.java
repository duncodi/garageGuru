package garageguru.users.bean;

import garageguru.users.model.Users;

public interface UsersBeanI {
	void add(Users user);

	String allUsersInJson(String uniqueLink);
}
