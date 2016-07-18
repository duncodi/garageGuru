package garageguru.common.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class CommonFields implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Column(columnDefinition = "DATE")
	private String dateUpdated;
	
	@Column(columnDefinition = "TIME")
	private String timeUpdated;
	
	@Column 
	private int activeStatus;

	public String getDateUpdated() {
		return dateUpdated;
	}

	public void setDateUpdated(String dateUpdated) {
		this.dateUpdated = dateUpdated;
	}

	public String getTimeUpdated() {
		return timeUpdated;
	}

	public void setTimeUpdated(String timeUpdated) {
		this.timeUpdated = timeUpdated;
	}

	public int getActiveStatus() {
		return activeStatus;
	}

	public void setActiveStatus(int activeStatus) {
		this.activeStatus = activeStatus;
	}
	
	

}
