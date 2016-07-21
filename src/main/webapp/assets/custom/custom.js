function getElById(el){
	return document.getElementById(el);
}


function formDisplay(form){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "Loading...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				getElById('ajax-form-content').innerHTML = form;
			}
		}
	}
	
	ajax.open("GET", './index.jsp', true);
	ajax.send();
		
}

function createPerson(){
	
	var form = 	"<div class='panel'>" +
					"<div class='panel-heading'>" +
						"<h3 class='panel-title'>Register Staff</h3>" +
					"</div>" +
					"<div class='panel-body container-fluid'>" +
						"<form autocomplete='off' method='post' action='#'>" +
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' id='idNumber' name='idNumber' />" +
								"<label class='floating-label'>Id/Passport/PF No.</label>" +
							"</div>" +
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' id='firstName' name='firstName' />" +
								"<label class='floating-label'>First Name</label>" +
							"</div>" +
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' id='secondName' name='secondName' />" +
								"<label class='floating-label'>Second Name</label>" +
							"</div>" +
							"<div class='form-group form-material floating'>" +
								"<input type='email' class='form-control' id='email' name='email' />" +
								"<label class='floating-label'>Email</label>" +
							"</div>" +
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' id='phone' name='phone' />" +
								"<label class='floating-label'>Cell Phone (+254)</label>" +
							"</div>" +
						"</form>" +
						"<a class='btn btn-primary btn-block' onclick='savePerson();'>Register Staff</a>" +
					"</div>" +
				"</div>";
	
	formDisplay(form);
}

function savePerson(){
	var firstName = getElById('firstName').value;
	var secondName = getElById('secondName').value;
	var phone = getElById('phone').value;
	var email = getElById('email').value;
	var idNumber = getElById('idNumber').value;
	
	var params = 'firstName=' +encodeURIComponent(firstName) + '&secondName=' + encodeURIComponent(secondName) + '&phone=' + encodeURIComponent(phone) + '&email=' + encodeURIComponent(email) + '&idNumber=' + encodeURIComponent(idNumber); 
	var message = "Staff saved successfully!";
	var reloadId = 1;
	save(params, "./registerPerson/*", message, reloadId);
}

function save(params, uri, message, reloadId){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "Saving. Please wait...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				//getElById('ajax-form-content').innerHTML = ajax.responseText;
				bootbox.alert(message);
				if(reloadId==1)
					createPerson();
				else if(reloadId==2)
					createUser();
				else if(reloadId==3)
					createService();
				else if(reloadId==4)
					createPayment();
			}
			else{
				bootbox.alert("There was an error during saving. Please try again")
				if(reloadId==1)
					createPerson();
				else if(reloadId==2)
					createUser();
				else if(reloadId==3)
					createService();
				else if(reloadId==4)
					createPayment();
			}
				
		}
	}
	ajax.open("POST", uri, true);
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send(params);
}


function createUser(){
	
	var form = 	"<div class='panel'>" +
					"<div class='panel-heading'>" +
						"<h3 class='panel-title'>New User</h3>" +
					"</div>" +
					"<div class='panel-body container-fluid'>" +
						"<form autocomplete='off' method='post' action='#'>" +
							
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' id='personId' name='personId' />" +
								"<label class='floating-label'>Who will use this account?</label>" +
							"</div>" +
						
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' id='username' name='username' />" +
								"<label class='floating-label'>Username</label>" +
							"</div>" +
							"<div class='form-group form-material floating'>" +
								"<input type='password' class='form-control' id='password' name='password' />" +
								"<label class='floating-label'>Password</label>" +
							"</div>" +
							"<div class='form-group form-material floating'>" +
								"<input type='password' class='form-control' id='confirmPassword' name='confirmPassword' />" +
								"<label class='floating-label'>Confirm Password</label>" +
							"</div>" +							
						"</form>" +
						"<a class='btn btn-primary btn-block' onclick='saveUser();'>Create User</a>" +
					"</div>" +
				"</div>";
	
	formDisplay(form);
}

function saveUser(){
	var username = getElById('username').value;
	var password = getElById('password').value;
	var personId = getElById('personId').value;
	
	var params = 'username=' +encodeURIComponent(username) + '&password=' + encodeURIComponent(password) + '&personId=' + encodeURIComponent(personId); 
	var message = "User Created successfully!";
	var reloadId = 2;
	save(params, "./users/*", message, reloadId);
}

function createService(){
	
	var form = 	"<div class='panel'>" +
					"<div class='panel-heading'>" +
						"<h3 class='panel-title'>New Service</h3>" +
					"</div>" +
					"<div class='panel-body container-fluid' style='font-size:14px'>" +
						"<form autocomplete='off' method='post' action='#'>" +
							
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' id='regNo' name='regNo' />" +
								"<label class='floating-label'>What is the Vehicle's Registration No.?</label>" +
							"</div>" +
							
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' id='idNumber' name='idNumber' />" +
								"<label class='floating-label'>What is the Id/Passport No. of the Owner?</label>" +
							"</div>" +
						
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' id='fullName' name='fullName' />" +
								"<label class='floating-label'>What is the Name of the Owner?</label>" +
							"</div>" +
							
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' id='phone' name='phone' />" +
								"<label class='floating-label'>What is the Cell Phone of the Owner?</label>" +
							"</div>" +
							
							
							"<div class='form-group form-material floating'>"+
			                    "<label class='control-label' for='description'>Now Describe the vehicle and the services</label>"+
			                    "<textarea class='form-control' id='description' name='description' rows='3'></textarea>"+
			                "</div>" +
													
						"</form>" +
						"<a class='btn btn-primary btn-block' onclick='saveService();'>Create Service</a>" +
					"</div>" +
				"</div>";
	
	formDisplay(form);
}

function saveService(){
	var regNo = getElById('regNo').value;
	var idNumber = getElById('idNumber').value;
	var fullName = getElById('fullName').value;
	var phone = getElById('phone').value;
	var description = getElById('description').value;
	
	var params = 'regNo=' +encodeURIComponent(regNo) + '&idNumber=' + encodeURIComponent(idNumber) + '&fullName=' + encodeURIComponent(fullName) + '&phone=' + encodeURIComponent(phone) + '&description=' + encodeURIComponent(description); 
	var message = "Service Created successfully!";
	var reloadId = 3;
	save(params, "./services/*", message, reloadId);
}

function createPayment(){
	
	var form = 	"<div class='panel'>" +
					"<div class='panel-heading'>" +
						"<h3 class='panel-title'>New Service Payment</h3>" +
					"</div>" +
					"<div class='panel-body container-fluid' style='font-size:14px'>" +
						"<form autocomplete='off' method='post' action='#'>" +
							
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' id='serviceNo' name='serviceNo' />" +
								"<label class='floating-label'>What is the Garage Service (GSV) Number?</label>" +
							"</div>" +
							
							"<div class='form-group form-material floating'>" +
								"<input type='number' class='form-control' id='amount' name='amount' />" +
								"<label class='floating-label'>What is the Amount Being Paid (Kes.)?</label>" +
							"</div>" +
							
							"<div class='form-group form-material floating'>"+
			                    "<label class='control-label' for='narration'>Please Describe/Narrate this Payment</label>"+
			                    "<textarea class='form-control' id='narration' name='narration' rows='2'></textarea>"+
			                "</div>" +
							
							"<div class='form-group form-material floating'>"+
			                   "<select name='completeService' id='completeService' class='form-control'>"+
			                     "<option>&nbsp;</option>"+
			                     "<option value='Yes'>Yes</option>"+
			                     "<option value='No'>No</option>   "+             
			                   "</select>"+
			                   "<label class='floating-label'>Do you want to complete this Service?</label>"+
			                "</div>" +							
							
							
													
						"</form>" +
						"<a class='btn btn-primary btn-block' onclick='savePayment();'>Proceed and Post Payment</a>" +
					"</div>" +
				"</div>";
	
	formDisplay(form);
}

function savePayment(){
	var serviceNo = getElById('serviceNo').value;
	var amount = getElById('amount').value;
	var completeService = getElById('completeService').value;
	var narration = getElById('narration').value;
	
	var params = 'serviceNo=' +encodeURIComponent(serviceNo) + '&amount=' + encodeURIComponent(amount) + '&completeService=' + encodeURIComponent(completeService) + '&narration=' + encodeURIComponent(narration);
	var message = "Payment Posted successfully!";
	var reloadId = 4;
	save(params, "./payments/*", message, reloadId);
}