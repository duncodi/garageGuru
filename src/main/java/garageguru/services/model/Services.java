package garageguru.services.model;

import garageguru.common.model.CommonFields;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "all_services")
public class Services implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column
	private String regNo;
	
	@Column
	private String idNumber;
	
	@Column
	private String fullName;
	
	@Column
	private String phone;
	
	@Column (columnDefinition = "TEXT")
	private String description;
	
	@Column (unique = true)
	private String serviceNo;
	
	@Embedded
	private CommonFields dateAndStatus;
	
	@Column
	private String confirmationLink;
	
	@Column
	private String postedBy;
	
	@Column
	private String serviceComplete;
	
	@Column
	private Long cost;
	
	@Column
	private Long totalPaid;
	
	
	
	public Long getTotalPaid() {
		return totalPaid;
	}

	public void setTotalPaid(Long totalPaid) {
		this.totalPaid = totalPaid;
	}

	public Long getCost() {
		return cost;
	}

	public void setCost(Long cost) {
		this.cost = cost;
	}

	public String getServiceComplete() {
		return serviceComplete;
	}

	public void setServiceComplete(String serviceComplete) {
		this.serviceComplete = serviceComplete;
	}

	public String getPostedBy() {
		return postedBy;
	}

	public void setPostedBy(String postedBy) {
		this.postedBy = postedBy;
	}

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

	public String getRegNo() {
		return regNo;
	}

	public void setRegNo(String regNo) {
		this.regNo = regNo;
	}

	public String getIdNumber() {
		return idNumber;
	}

	public void setIdNumber(String idNumber) {
		this.idNumber = idNumber;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getServiceNo() {
		return serviceNo;
	}

	public void setServiceNo(String serviceNo) {
		this.serviceNo = serviceNo;
	}

	public CommonFields getDateAndStatus() {
		return dateAndStatus;
	}

	public void setDateAndStatus(CommonFields dateAndStatus) {
		this.dateAndStatus = dateAndStatus;
	}
	
	public String getJson(){
		StringBuilder sb = new StringBuilder();
		sb.append("{")
			.append("\"serviceNo\": \"").append(getServiceNo()).append("\", ")
			.append("\"serviceComplete\": \"").append(getServiceComplete()).append("\", ")
			.append("\"regNo\": \"").append(getRegNo()).append("\", ")
			.append("\"idNumber\": \"").append(getIdNumber()).append("\", ")
			.append("\"fullName\": \"").append(getFullName()).append("\", ")
			.append("\"phone\": \"").append(getPhone()).append("\", ")
			.append("\"description\": \"").append(getDescription()).append("\", ")
			.append("\"confirmationLink\": \"").append(getConfirmationLink()).append("\", ")
			.append("\"cost\": \"").append(getCost()).append("\", ")
			.append("\"totalPaid\": \"").append(getTotalPaid()).append("\", ")
			.append("\"dateUpdated\": \"").append(getDateAndStatus().getDateUpdated()).append("\", ")
			.append("\"timeUpdated\": \"").append(getDateAndStatus().getTimeUpdated()).append("\", ")
			.append("\"postedBy\": \"").append(getPostedBy()).append("\", ")
			.append("\"activeStatus\": \"").append(getDateAndStatus().getActiveStatus()).append("\", ")
			.append("\"id\": \"").append(getId()).append("\"")
			
		.append("}");
		
		return sb.toString();
	}
}
