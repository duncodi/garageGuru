package garageguru.users.model;

import garageguru.common.model.CommonFields;
import garageguru.garages.model.Garages;
import garageguru.persons.model.Persons;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "all_users")
public class Users implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(unique = true)
	private String username;
	
	@Column
	private String password;
	
	@Column
	private String userLevel;
	
	@Column
	private String lastLoginDate;
	
	@Column 
	private String lastLoginTime;
	
	@Column
	private int loggedIn;
	
	@Embedded
	private CommonFields dateAndStatus;
	
	@Column
	private String confirmationLink;
	
	@ManyToOne
	@JoinColumn(name = "garageId")
	private Garages garage;
	
	@ManyToOne
	@JoinColumn(name = "personId")
	private Persons person;
	
	
	
	public String getConfirmationLink() {
		return confirmationLink;
	}

	public void setConfirmationLink(String confirmationLink) {
		this.confirmationLink = confirmationLink;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserLevel() {
		return userLevel;
	}

	public void setUserLevel(String userLevel) {
		this.userLevel = userLevel;
	}

	public String getLastLoginDate() {
		return lastLoginDate;
	}

	public void setLastLoginDate(String lastLoginDate) {
		this.lastLoginDate = lastLoginDate;
	}

	public String getLastLoginTime() {
		return lastLoginTime;
	}

	public void setLastLoginTime(String lastLoginTime) {
		this.lastLoginTime = lastLoginTime;
	}

	public int getLoggedIn() {
		return loggedIn;
	}

	public void setLoggedIn(int loggedIn) {
		this.loggedIn = loggedIn;
	}

	public CommonFields getDateAndStatus() {
		if(dateAndStatus ==  null)
			dateAndStatus = new CommonFields();
		
		return dateAndStatus;
	}

	public void setDateAndStatus(CommonFields dateAndStatus) {
		this.dateAndStatus = dateAndStatus;
	}
	
	
}
