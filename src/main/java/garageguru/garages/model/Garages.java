package garageguru.garages.model;

import garageguru.common.model.CommonFields;
import garageguru.persons.model.Persons;
import garageguru.users.model.Users;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Null;

@Entity
@Table(name = "all_garages")
public class Garages implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column
	private String garageName;
	
	@Column 
	private String address;
	
	@Column
	private String location;
	
	@Column
	private String country;
		
	@Column(columnDefinition = "TEXT")
	private String garageDescription;
	
	@Column
	private int confirmed;
	
	@Column
	private String confirmationLink;
	
	@Null
	@Column(columnDefinition = "DATE")
	private String dateConfirmed;
	
	@Null
	@Column(columnDefinition = "TIME")
	private String timeConfirmed;
	
	@Embedded
	private CommonFields dateAndStatus;
	
	//relations
	@ManyToOne
	@JoinColumn(name = "ownerId")
	private Persons person;
	
	@OneToMany(mappedBy = "garage")
	private Set<Users> users;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getGarageName() {
		return garageName;
	}

	public void setGarageName(String garageName) {
		this.garageName = garageName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getGarageDescription() {
		return garageDescription;
	}

	public void setGarageDescription(String garageDescription) {
		this.garageDescription = garageDescription;
	}

	public int getConfirmed() {
		return confirmed;
	}

	public void setConfirmed(int confirmed) {
		this.confirmed = confirmed;
	}

	public String getConfirmationLink() {
		return confirmationLink;
	}

	public void setConfirmationLink(String confirmationLink) {
		this.confirmationLink = confirmationLink;
	}

	public String getDateConfirmed() {
		return dateConfirmed;
	}

	public void setDateConfirmed(String dateConfirmed) {
		this.dateConfirmed = dateConfirmed;
	}

	public String getTimeConfirmed() {
		return timeConfirmed;
	}

	public void setTimeConfirmed(String timeConfirmed) {
		this.timeConfirmed = timeConfirmed;
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
