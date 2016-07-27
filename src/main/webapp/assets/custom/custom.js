function getElById(el){
	return document.getElementById(el);
}


function formDisplay(form){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Processing...";
		
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
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Saving. Please wait...";
		
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
				else if(reloadId==5)
					createDebit();
				else if(reloadId==6)
					updateCost();
			}
			else{
				bootbox.alert(ajax.responseText+"There was an error during saving. Please try again")
				if(reloadId==1)
					createPerson();
				else if(reloadId==2)
					createUser();
				else if(reloadId==3)
					createService();
				else if(reloadId==4)
					createPayment();
				else if(reloadId==5)
					createDebit();
				else if(reloadId==6)
					updateCost();
			}
				
		}
	}
	ajax.open("POST", uri, true);
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send(params);
}


function createUser(){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Processing...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				
				var response = ajax.responseText;
				var jsonRecords = JSON.parse(response);
				
				var form = 	"<div class='panel'>" +
								"<div class='panel-heading'>" +
									"<h3 class='panel-title'>New User</h3>" +
								"</div>" +
								"<div class='panel-body container-fluid'>" +
									"<form autocomplete='off' method='post' action='#'>" +
										
										"<div class='form-group form-material floating'>"+
						                   "<select name='personId' id='personId' class='form-control'>"+
						                   		"<option>&nbsp;</option>";
						                   		
						                   for (var i in jsonRecords){
										    	var id = jsonRecords[i].id;
										    	var idNumber = jsonRecords[i].idNumber;
										        var name = jsonRecords[i].firstName+" "+jsonRecords[i].secondName;
										        
										    	form +=	"<option value='"+id+"'>"+name+', '+idNumber+"</option>";
										    	
										     
										    }
						                   	
						                 
						                     
						              form += "</select>"+
						                   "<label class='floating-label'>Who will use this account?</label>"+
						                "</div>" +	
									
										"<div class='form-group form-material floating'>" +
											"<input type='text' class='form-control' id='username' name='username' />" +
											"<label class='floating-label'>Username</label>" +
										"</div>" +
										
										"<div class='form-group form-material floating'>"+
						                   "<select name='userLevel' id='userLevel' class='form-control'>"+
						                     "<option>&nbsp;</option>"+
						                     "<option value='User'>User</option>"+
						                     "<option value='Admin'>Admin</option>   "+             
						                   "</select>"+
						                   "<label class='floating-label'>What is the access level of this user?</label>"+
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
				
				
				
				getElById('ajax-form-content').innerHTML = form;
			}
		}
	}
	
	ajax.open("GET", './users/newUser', true);
	ajax.send();
}

function saveUser(){
	var username = getElById('username').value;
	var userLevel = getElById('userLevel').value;
	var password = getElById('password').value;
	var personId = getElById('personId').value;
	
	var params = 'username=' +encodeURIComponent(username) + '&password=' + encodeURIComponent(password) + '&personId=' + encodeURIComponent(personId) + '&userLevel=' + encodeURIComponent(userLevel); 
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


function updateCost(){
	
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Processing...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				var response = ajax.responseText;
				var jsonRecords = JSON.parse(response);
				var form = 	"<div class='panel'>" +
							"<div class='panel-heading'>" +
								"<h3 class='panel-title'>New Service Payment</h3>" +
							"</div>" +
							"<div class='panel-body container-fluid' style='font-size:14px'>" +
								"<form autocomplete='off' method='post' action='#'>" +
									
									"<div class='form-group form-material floating'>"+
					                   "<select name='serviceNo' id='serviceNo' class='form-control'>"+
					                   		"<option>&nbsp;</option>";
					                   		
					                   for (var i in jsonRecords){
									    	var id = jsonRecords[i].id;
									    	var serviceNo = jsonRecords[i].serviceNo;
									    	var regNo = jsonRecords[i].regNo;
									    	var idNumber = jsonRecords[i].idNumber;
										    var fullName = jsonRecords[i].fullName;
									        
									    	form +=	"<option value='"+serviceNo+"'>"+serviceNo+' for '+regNo+', '+fullName+"</option>";
									    	
									     
									    }
					                   	
					                 
					                     
					              form += "</select>"+
					                   "<label class='floating-label'>What is the GSV Number?</label>"+
					                "</div>" +
									
									"<div class='form-group form-material floating'>" +
										"<input type='number' class='form-control' id='cost' name='cost' />" +
										"<label class='floating-label'>What is the Cost of Service after Analysis?</label>" +
									"</div>" +
									
												
								"</form>" +
								"<a class='btn btn-primary btn-block' onclick='saveCost("+6+");'>Proceed and Post Payment</a>" +
							"</div>" +
						"</div>";
				
				
				getElById('ajax-form-content').innerHTML = form;
			}
		}
	}
	
	ajax.open("GET", './payments/newPayment', true);
	ajax.send();
	
}

function saveCost(reloadId){
	var serviceNo = getElById('serviceNo').value;
	var cost = getElById('cost').value;
	
	var params = 'serviceNo=' +encodeURIComponent(serviceNo) + '&cost=' + encodeURIComponent(cost);
	var message = "Cost Updated successfully!";
	save(params, "./payments/updateCost", message, reloadId);
}

function createPayment(){
	
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Processing...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				var response = ajax.responseText;
				var jsonRecords = JSON.parse(response);
				var form = 	"<div class='panel'>" +
							"<div class='panel-heading'>" +
								"<h3 class='panel-title'>New Service Payment</h3>" +
							"</div>" +
							"<div class='panel-body container-fluid' style='font-size:14px'>" +
								"<form autocomplete='off' method='post' action='#'>" +
									
									"<div class='form-group form-material floating'>"+
					                   "<select name='serviceNo' id='serviceNo' class='form-control'>"+
					                   		"<option>&nbsp;</option>";
					                   		
					                   for (var i in jsonRecords){
									    	var id = jsonRecords[i].id;
									    	var serviceNo = jsonRecords[i].serviceNo;
									    	var regNo = jsonRecords[i].regNo;
									    	var idNumber = jsonRecords[i].idNumber;
										    var fullName = jsonRecords[i].fullName;
									        
									    	form +=	"<option value='"+serviceNo+"'>"+serviceNo+' for '+regNo+', '+fullName+"</option>";
									    	
									     
									    }
					                   	
					                 
					                     
					              form += "</select>"+
					                   "<label class='floating-label'>What is the GSV Number?</label>"+
					                "</div>" +
									
									"<div class='form-group form-material floating'>" +
										"<input type='number' class='form-control' id='amount' name='amount' />" +
										"<label class='floating-label'>What is the Amount Being Paid/Credited?</label>" +
									"</div>" +
									
									"<div class='form-group form-material floating'>"+
					                    "<label class='control-label' for='narration'>Please Describe/Narrate this Payment</label>"+
					                    "<textarea class='form-control' id='narration' name='narration' rows='2'></textarea>"+
					                "</div>" +
									
									/*"<div class='form-group form-material floating'>"+
					                   "<select name='completeService' id='completeService' class='form-control'>"+
					                     "<option>&nbsp;</option>"+
					                     "<option value='Yes'>Yes</option>"+
					                     "<option value='No'>No</option>   "+             
					                   "</select>"+
					                   "<label class='floating-label'>Do you want to complete this Service?</label>"+
					                "</div>" +	*/						
					                
					                "<input type='hidden' class='form-control' value='' id='completeService' name='completeService' />"+	
									"<input type='hidden' class='form-control' value='Credit' id='transactionType' name='transactionType' />"+	
															
								"</form>" +
								"<a class='btn btn-primary btn-block' onclick='savePayment("+4+");'>Proceed and Post Payment</a>" +
							"</div>" +
						"</div>";
				
				
				getElById('ajax-form-content').innerHTML = form;
			}
		}
	}
	
	ajax.open("GET", './payments/newPayment', true);
	ajax.send();
	
}

function savePayment(reloadId){
	var transactionType = getElById('transactionType').value;
	var serviceNo = getElById('serviceNo').value;
	var amount = getElById('amount').value;
	var completeService = getElById('completeService').value;
	var narration = getElById('narration').value;
	
	var params = 'narration=' +encodeURIComponent(narration) + '&serviceNo=' +encodeURIComponent(serviceNo) + '&amount=' + encodeURIComponent(amount) + '&completeService=' + encodeURIComponent(completeService) + '&transactionType=' + encodeURIComponent(transactionType);
	var message = "Payment Posted successfully!";
	save(params, "./payments/*", message, reloadId);
}

function createDebit(){
	
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Processing...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				var response = ajax.responseText;
				var jsonRecords = JSON.parse(response);
				var form = 	"<div class='panel'>" +
							"<div class='panel-heading'>" +
								"<h3 class='panel-title'>New Debit Transaction</h3>" +
							"</div>" +
							"<div class='panel-body container-fluid' style='font-size:14px'>" +
								"<form autocomplete='off' method='post' action='#'>" +
									
									"<div class='form-group form-material floating'>"+
					                   "<select name='serviceNo' id='serviceNo' class='form-control'>"+
					                   		"<option value='None'>None</option>";
					                   		
					                   for (var i in jsonRecords){
									    	var id = jsonRecords[i].id;
									    	var serviceNo = jsonRecords[i].serviceNo;
									    	var regNo = jsonRecords[i].regNo;
									    	var idNumber = jsonRecords[i].idNumber;
										    var fullName = jsonRecords[i].fullName;
									        
									    	form +=	"<option value='"+serviceNo+"'>"+serviceNo+' for '+regNo+', '+fullName+"</option>";
									    	
									     
									    }
					                   	
					                 
					                     
					              form += "</select>"+
					                   "<label class='floating-label'>What is the GSV Number?</label>"+
					                "</div>" +
									
									"<div class='form-group form-material floating'>" +
										"<input type='number' class='form-control' id='amount' name='amount' />" +
										"<label class='floating-label'>What is the Amount Being Debited?</label>" +
									"</div>" +
									
									"<div class='form-group form-material floating'>"+
					                    "<label class='control-label' for='narration'>Please Describe/Narrate this Payment</label>"+
					                    "<textarea class='form-control' id='narration' name='narration' rows='2'></textarea>"+
					                "</div>" +
									
									"<input type='hidden' class='form-control' value='No' id='completeService' name='completeService' />"+
					                   		"<input type='hidden' class='form-control' value='Debit' id='transactionType' name='transactionType' />"+	
															
								"</form>" +
								"<a class='btn btn-primary btn-block' onclick='savePayment("+5+");'>Proceed and Post Debit</a>" +
							"</div>" +
						"</div>";
				
				
				getElById('ajax-form-content').innerHTML = form;
			}
		}
	}
	
	ajax.open("GET", './payments/newPayment', true);
	ajax.send();
	
}
