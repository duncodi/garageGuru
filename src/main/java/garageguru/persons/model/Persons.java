package garageguru.persons.model;

import garageguru.common.model.CommonFields;
import garageguru.garages.model.Garages;
import garageguru.users.model.Users;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Null;

@Entity
@Table(name = "all_persons")
public class Persons implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(unique = true)
	private String idNumber;
	
	@Column
	private String firstName;
	
	@Column
	private String secondName;
	
	@Column(unique = true)
	private String phone;
	
	@Column(unique = true)
	private String email;
	
	@Column
	private String confirmationLink;
	
	@Column
	private int confirmed;
	
	@Embedded
	private CommonFields dateAndStatus;
	
	@OneToMany(mappedBy = "person")
	private Set<Garages> garages;
	
	@OneToMany(mappedBy = "person")
	private Set<Users> users;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIdNumber() {
		return idNumber;
	}

	public void setIdNumber(String idNumber) {
		this.idNumber = idNumber;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getSecondName() {
		return secondName;
	}

	public void setSecondName(String secondName) {
		this.secondName = secondName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getConfirmationLink() {
		return confirmationLink;
	}

	public void setConfirmationLink(String confirmationLink) {
		this.confirmationLink = confirmationLink;
	}
	
	public int getConfirmed() {
		return confirmed;
	}

	public void setConfirmed(int confirmed) {
		this.confirmed = confirmed;
	}

	public CommonFields getDateAndStatus() {
		if(dateAndStatus ==  null)
			dateAndStatus = new CommonFields();
		
		return dateAndStatus;
	}

	public void setDateAndStatus(CommonFields dateAndStatus) {
		this.dateAndStatus = dateAndStatus;
	}
	
	/////

	
	public String getJson(){
		StringBuilder sb = new StringBuilder();
		sb.append("{")
			.append("\"idNumber\": \"").append(getIdNumber()).append("\", ")
			.append("\"firstName\": \"").append(getFirstName()).append("\", ")
			.append("\"secondName\": \"").append(getSecondName()).append("\", ")
			.append("\"phone\": \"").append(getPhone()).append("\", ")
			.append("\"email\": \"").append(getEmail()).append("\", ")
			.append("\"confirmationLink\": \"").append(getConfirmationLink()).append("\", ")
			.append("\"dateUpdated\": \"").append(getDateAndStatus().getDateUpdated()).append("\", ")
			.append("\"timeUpdated\": \"").append(getDateAndStatus().getTimeUpdated()).append("\", ")
			.append("\"activeStatus\": \"").append(getDateAndStatus().getActiveStatus()).append("\", ")
			.append("\"id\": \"").append(getId()).append("\"")
			
		.append("}");
		
		return sb.toString();
	}

	
}
