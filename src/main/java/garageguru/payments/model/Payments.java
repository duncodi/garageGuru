package garageguru.payments.model;

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
@Table(name = "all_payments")
public class Payments implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column
	private String transactionType;
	
	@Column(unique = true)
	private String refNo;
	
	@Column
	private Long amount;
	
	@Column
	private String serviceNo;
	
	@Column
	private String narration;
	
	@Column
	private String postedBy;
	
	@Embedded
	private CommonFields dateAndStatus;
	
	@Column
	private String confirmationLink;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public String getRefNo() {
		return refNo;
	}

	public void setRefNo(String refNo) {
		this.refNo = refNo;
	}

	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}

	public String getServiceNo() {
		return serviceNo;
	}

	public void setServiceNo(String serviceNo) {
		this.serviceNo = serviceNo;
	}

	public String getNarration() {
		return narration;
	}

	public void setNarration(String narration) {
		this.narration = narration;
	}

	public String getPostedBy() {
		return postedBy;
	}

	public void setPostedBy(String postedBy) {
		this.postedBy = postedBy;
	}

	public CommonFields getDateAndStatus() {
		return dateAndStatus;
	}

	public void setDateAndStatus(CommonFields dateAndStatus) {
		this.dateAndStatus = dateAndStatus;
	}

	public String getConfirmationLink() {
		return confirmationLink;
	}

	public void setConfirmationLink(String confirmationLink) {
		this.confirmationLink = confirmationLink;
	}
	
	public String getJson(){
		StringBuilder sb = new StringBuilder();
		sb.append("{")
			.append("\"transactionType\": \"").append(getTransactionType()).append("\", ")
			.append("\"refNo\": \"").append(getRefNo()).append("\", ")
			.append("\"amount\": \"").append(getAmount()).append("\", ")
			.append("\"serviceNo\": \"").append(getServiceNo()).append("\", ")
			.append("\"narration\": \"").append(getNarration()).append("\", ")
			.append("\"confirmationLink\": \"").append(getConfirmationLink()).append("\", ")
			.append("\"dateUpdated\": \"").append(getDateAndStatus().getDateUpdated()).append("\", ")
			.append("\"timeUpdated\": \"").append(getDateAndStatus().getTimeUpdated()).append("\", ")
			.append("\"postedBy\": \"").append(getPostedBy()).append("\", ")
			.append("\"activeStatus\": \"").append(getDateAndStatus().getActiveStatus()).append("\", ")
			.append("\"id\": \"").append(getId()).append("\"")
		.append("}");
		
		return sb.toString();
	}
}
