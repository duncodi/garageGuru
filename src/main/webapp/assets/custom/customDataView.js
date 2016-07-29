function getElById(el){
	return document.getElementById(el);
}

function displayStaff(uri){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Processing...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				
				response = ajax.responseText;
				
				var jsonRecords = JSON.parse(response);
				
				var data = "<div class=\"panel\">";
				data+=				"<header class=\"panel-heading\">";
				data+=					"<h3 class=\"panel-title\">";
				data+=						"All Staff";
				data+=					"</h3>";
				data+=				"</header>";
				data+=				"<div class=\"panel-body\">";
				data+=					"<div class=\"table-responsive\">";
				data+=						"<table class=\"table table-hover dataTable table-striped\" id=\"exampleFixedHeader\">";
				data+=							"<thead>";
				data+=								"<tr>";
				data+=									"<th>Id Number</th>";
				data+=									"<th>Full Name</th>";
				data+=									"<th>Phone</th>";
				data+=									"<th>Email</th>";
				data+=									"<th>Last Updated</th>";
				data+=								"</tr>";
				data+=							"</thead>";
				data+=							"<tfoot>";
				data+=								"<tr>";
				data+=									"<th>Id Number</th>";
				data+=									"<th>Full Name</th>";
				data+=									"<th>Phone</th>";
				data+=									"<th>Email</th>";
				data+=									"<th>Last Updated</th>";
				data+=								"</tr>";
				data+=							"</tfoot>";
				data+=							"<tbody>";
												
												
												
												
				
				   
				    for (var i in jsonRecords){
				    	var id = jsonRecords[i].id;
				    	
				        data+="<tr>";
				        data+="<td>"+jsonRecords[i].idNumber+"</td>";
				        data+="<td>"+jsonRecords[i].firstName+" "+jsonRecords[i].secondName+"</td>";
				        data+="<td>"+jsonRecords[i].phone+"</td>";
				        data+="<td>"+jsonRecords[i].email+"</td>";
				        data+="<td>"+jsonRecords[i].dateUpdated+" at "+jsonRecords[i].timeUpdated+"</td>";
				        
				        data+="<td><a class=\"btn btn-warning btn-block btn-xs\" onclick=\"editPerson("+id+");\">Edit</a></td>";
				        data+="<td><a class=\"btn btn-danger btn-block btn-xs\" onclick=\"deleteStaff("+id+");\">Delete</a></td>";
				        data+="</tr>";
				        
				    }
				    
											
											
											data+="</tbody>";
							data+=						"</table>";
							data+=		"</div>";
							data+=	"</div>";
							data+="</div>";	

				getElById('ajax-form-content').innerHTML = data;
			}
		}		
	}
	ajax.open('GET', uri, true);
	ajax.send();
}


function viewPeople(){

	displayStaff('./registerPerson/*');
	
}


function displayUsers(uri){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Processing...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				
				response = ajax.responseText;
				
				var jsonRecords = JSON.parse(response);
				
				var data = "<div class=\"panel\">";
				data+=				"<header class=\"panel-heading\">";
				data+=					"<h3 class=\"panel-title\">";
				data+=						"All Users";
				data+=					"</h3>";
				data+=				"</header>";
				data+=				"<div class=\"panel-body\">";
				data+=					"<div class=\"table-responsive\">";
				data+=						"<table class=\"table table-hover dataTable table-striped\" id=\"exampleFixedHeader\">";
				data+=							"<thead>";
				data+=								"<tr>";
				data+=									"<th>Username</th>";
				data+=									"<th>User Level</th>";
				data+=									"<th>Last Login</th>";
				data+=									"<th>Logged In?</th>";
				data+=									"<th>Last Updated</th>";
				data+=								"</tr>";
				data+=							"</thead>";
				data+=							"<tfoot>";
				data+=								"<tr>";
				data+=									"<th>Usernamer</th>";
				data+=									"<th>User Level</th>";
				data+=									"<th>Last Login</th>";
				data+=									"<th>Logged In?</th>";
				data+=									"<th>Last Updated</th>";
				data+=								"</tr>";
				data+=							"</tfoot>";
				data+=							"<tbody>";
												
												
												
												
				
				   
				    for (var i in jsonRecords){
				    	var id = jsonRecords[i].id;
				    	var lastLoginDate = jsonRecords[i].lastLoginDate;
				    	var lastLoginTime = jsonRecords[i].lastLoginTime;
				    	var loggedIn = jsonRecords[i].loggedIn;
				    	//var firstName =  jsonRecords[i].firstName;
				    	//var secondName =  jsonRecords[i].secondName;
				    	//var idNumber =  jsonRecords[i].idNumber;
				    	//var staff = idNumber+", "+firstName+" "+secondName;
				    	
				    	var lastLogin = null;
				    	
				    	if(loggedIn==1)
				    		loggedIn = "Yes";
				    	else
				    		loggedIn = "No";
				    	
				    	if(lastLoginDate=="null" && lastLoginTime=="null")
				    		lastLogin = "Never";
				    	else
				    		lastLogin = lastLoginDate+" at "+lastLoginTime;
				    	
				        data+="<tr>";
				        data+="<td>"+jsonRecords[i].username+"</td>";
				        data+="<td>"+jsonRecords[i].userLevel+"</td>";
				        data+="<td>"+lastLogin+"</td>";
				        data+="<td>"+loggedIn+"</td>";
				        //data+="<td>"+staff+"</td>";
				        data+="<td>"+jsonRecords[i].dateUpdated+" at "+jsonRecords[i].timeUpdated+"</td>";
				        
				        var uName = jsonRecords[i].username;
				        
				        //, uri, reloadId, message, uName
				        data+="<td><a class=\"btn btn-warning btn-block btn-xs\" onclick=\"editUser("+id+");\">Edit</a></td>";
				        data+="<td><a class=\"btn btn-danger btn-block btn-xs\" onclick=\"deleteUser("+id+")\">Delete</a></td>";
				         
				        data+="</tr>";
				        
				    }
				    
											
											
											data+="</tbody>";
							data+=						"</table>";
							data+=		"</div>";
							data+=	"</div>";
							data+="</div>";	

				getElById('ajax-form-content').innerHTML = data;
			}
		}		
	}
	ajax.open('GET', uri, true);
	ajax.send();
}


function viewUsers(){

	displayUsers('./users/*');
	
}


function displayServices(uri){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Processing...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				
				response = ajax.responseText;
				
				var jsonRecords = JSON.parse(response);
				
				var data = "<div class=\"panel\">";
				data+=				"<header class=\"panel-heading\">";
				data+=					"<h3 class=\"panel-title\">";
				data+=						"All Services";
				data+=					"</h3>";
				data+=				"</header>";
				data+=				"<div class=\"panel-body\">";
				data+=					"<div class=\"table-responsive\">";
				data+=						"<table class=\"table table-hover dataTable table-striped\" id=\"exampleFixedHeader\">";
				data+=							"<thead>";
				data+=								"<tr>";
				data+=									"<th>Service No.</th>";
				data+=									"<th>M/V Reg. No.</th>";
				data+=									"<th>Owner's Id/Passport</th>";
				data+=									"<th>Full Name</th>";
				data+=									"<th>Cell Phone</th>";
				data+=									"<th>Description</th>";
				data+=									"<th>Cost</th>";
				data+=									"<th>Total Paid</th>";
				data+=									"<th>Balance</th>";
				data+=									"<th>Complete?</th>";
				data+=									"<th>Posted By</th>";
				data+=								"</tr>";
				data+=							"</thead>";
				data+=							"<tfoot>";
				data+=								"<tr>";
				data+=									"<th>Service No.</th>";
				data+=									"<th>M/V Reg. No.</th>";
				data+=									"<th>Owner's Id/Passport</th>";
				data+=									"<th>Full Name</th>";
				data+=									"<th>Cell Phone</th>";
				data+=									"<th>Description</th>";
				data+=									"<th>Cost</th>";
				data+=									"<th>Total Paid</th>";
				data+=									"<th>Balance</th>";
				data+=									"<th>Complete?</th>";
				data+=									"<th>Posted By</th>";
				data+=								"</tr>";
				data+=							"</tfoot>";
				data+=							"<tbody>";
												
												
												
												
				
				   
				    for (var i in jsonRecords){
				    	var id = jsonRecords[i].id;
				    	var cost = jsonRecords[i].cost;
				    	var totalPaid = jsonRecords[i].totalPaid;
				    	
				    	if(cost=='null')
				    		cost = 0;
				    	if(totalPaid=='null')
				    		totalPaid = 0;
				    	
				    	var costFloat, totalPaidFloat;
				    	costFloat = parseFloat(cost);
				    	totalPaidFloat = parseFloat(totalPaid);
				    	
				    	var balance = costFloat-totalPaidFloat;
				    	
				        data+="<tr>";
				        data+="<td>"+jsonRecords[i].serviceNo+"</td>";
				        data+="<td>"+jsonRecords[i].regNo+"</td>";
				        data+="<td>"+jsonRecords[i].idNumber+"</td>";
				        data+="<td>"+jsonRecords[i].fullName+"</td>";
				        data+="<td>"+jsonRecords[i].phone+"</td>";
				        data+="<td>"+jsonRecords[i].description+"</td>";
				        data+="<td>$"+jsonRecords[i].cost+"</td>";
				        data+="<td>$"+jsonRecords[i].totalPaid+"</td>";
				        data+="<td>$"+balance+"</td>";
				        data+="<td>"+jsonRecords[i].serviceComplete+"</td>";
				        data+="<td>"+jsonRecords[i].postedBy+", on "+jsonRecords[i].dateUpdated+" at "+jsonRecords[i].timeUpdated+"</td>";
				        
				        //data+="<td><a class=\"btn btn-warning btn-block btn-xs\" onclick=\"editPerson("+id+");\">Edit</a></td>";
				        //data+="<td><a class=\"btn btn-danger btn-block btn-xs\" onclick=\"delete("+id+");\">Delete</a></td>";
				        data+="</tr>";
				        
				    }
				    
											
											
											data+="</tbody>";
							data+=						"</table>";
							data+=		"</div>";
							data+=	"</div>";
							data+="</div>";	

				getElById('ajax-form-content').innerHTML = data;
			}
		}		
	}
	ajax.open('GET', uri, true);
	ajax.send();
}


function viewServices(){

	displayServices('./services/*');
	
}

function displayPendingServices(uri){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Processing...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				
				response = ajax.responseText;
				
				var jsonRecords = JSON.parse(response);
				
				var data = "<div class=\"panel\">";
				data+=				"<header class=\"panel-heading\">";
				data+=					"<h3 class=\"panel-title\">";
				data+=						"All Services";
				data+=					"</h3>";
				data+=				"</header>";
				data+=				"<div class=\"panel-body\">";
				data+=					"<div class=\"table-responsive\">";
				data+=						"<table class=\"table table-hover dataTable table-striped\" id=\"exampleFixedHeader\">";
				data+=							"<thead>";
				data+=								"<tr>";
				data+=									"<th>Service No.</th>";
				data+=									"<th>M/V Reg. No.</th>";
				data+=									"<th>Owner's Id/Passport</th>";
				data+=									"<th>Full Name</th>";
				data+=									"<th>Cell Phone</th>";
				data+=									"<th>Description</th>";
				data+=									"<th>Cost</th>";
				data+=									"<th>Total Paid</th>";
				data+=									"<th>Balance</th>";
				data+=									"<th>Complete?</th>";
				data+=									"<th>Posted By</th>";
				data+=								"</tr>";
				data+=							"</thead>";
				data+=							"<tfoot>";
				data+=								"<tr>";
				data+=									"<th>Service No.</th>";
				data+=									"<th>M/V Reg. No.</th>";
				data+=									"<th>Owner's Id/Passport</th>";
				data+=									"<th>Full Name</th>";
				data+=									"<th>Cell Phone</th>";
				data+=									"<th>Description</th>";
				data+=									"<th>Cost</th>";
				data+=									"<th>Total Paid</th>";
				data+=									"<th>Balance</th>";
				data+=									"<th>Complete?</th>";
				data+=									"<th>Posted By</th>";
				data+=								"</tr>";
				data+=							"</tfoot>";
				data+=							"<tbody>";
												
												
												
												
				
				   
				    for (var i in jsonRecords){
				    	var id = jsonRecords[i].id;
				    	var cost = jsonRecords[i].cost;
				    	var totalPaid = jsonRecords[i].totalPaid;
				    	
				    	if(cost=='null')
				    		cost = 0;
				    	if(totalPaid=='null')
				    		totalPaid = 0;
				    	
				    	var costFloat, totalPaidFloat;
				    	costFloat = parseFloat(cost);
				    	totalPaidFloat = parseFloat(totalPaid);
				    	
				    	var balance = costFloat-totalPaidFloat;
				    	
				        data+="<tr>";
				        data+="<td>"+jsonRecords[i].serviceNo+"</td>";
				        data+="<td>"+jsonRecords[i].regNo+"</td>";
				        data+="<td>"+jsonRecords[i].idNumber+"</td>";
				        data+="<td>"+jsonRecords[i].fullName+"</td>";
				        data+="<td>"+jsonRecords[i].phone+"</td>";
				        data+="<td>"+jsonRecords[i].description+"</td>";
				        data+="<td>$"+jsonRecords[i].cost+"</td>";
				        data+="<td>$"+jsonRecords[i].totalPaid+"</td>";
				        data+="<td>$"+balance+"</td>";
				        data+="<td>"+jsonRecords[i].serviceComplete+"</td>";
				        data+="<td>"+jsonRecords[i].postedBy+", on "+jsonRecords[i].dateUpdated+" at "+jsonRecords[i].timeUpdated+"</td>";
				        
				        data+="<td><a class=\"btn btn-warning btn-block btn-xs\" onclick=\"editPerson("+id+");\">Edit</a></td>";
				        data+="<td><a class=\"btn btn-danger btn-block btn-xs\" onclick=\"deleteService("+id+");\">Cancel</a></td>";
				        data+="</tr>";
				        
				    }
				    
											
											
											data+="</tbody>";
							data+=						"</table>";
							data+=		"</div>";
							data+=	"</div>";
							data+="</div>";	

				getElById('ajax-form-content').innerHTML = data;
			}
		}		
	}
	ajax.open('GET', uri, true);
	ajax.send();
}


function pendingServices(){

	displayPendingServices('./services/pending');
	
}

function displayPayments(uri){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Processing...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				
				response = ajax.responseText;
				
				var jsonRecords = JSON.parse(response);
				
				var data = "<div class=\"panel\">";
				data+=				"<header class=\"panel-heading\">";
				data+=					"<h3 class=\"panel-title\">";
				data+=						"All Payments";
				data+=					"</h3>";
				data+=				"</header>";
				data+=				"<div class=\"panel-body\">";
				data+=					"<div class=\"table-responsive\">";
				data+=						"<table class=\"table table-hover dataTable table-striped\" id=\"exampleFixedHeader\">";
				data+=							"<thead>";
				data+=								"<tr>";
				data+=									"<th>Txn Type</th>";
				data+=									"<th>Ref. No.</th>";
				data+=									"<th>Amount</th>";
				data+=									"<th>GSV No.</th>";
				data+=									"<th>Narration</th>";
				data+=									"<th>Posted By</th>";
				data+=								"</tr>";
				data+=							"</thead>";
				data+=							"<tfoot>";
				data+=								"<tr>";
				data+=									"<th>Txn Type</th>";
				data+=									"<th>Ref. No.</th>";
				data+=									"<th>Amount</th>";
				data+=									"<th>GSV No.</th>";
				data+=									"<th>Narration</th>";
				data+=									"<th>Posted By</th>";
				data+=								"</tr>";
				data+=							"</tfoot>";
				data+=							"<tbody>";
												
												
												
												
				
				   
				    for (var i in jsonRecords){
				    	var id = jsonRecords[i].id;
				    	
				        data+="<tr>";
				        data+="<td>"+jsonRecords[i].transactionType+"</td>";
				        data+="<td>"+jsonRecords[i].refNo+"</td>";
				        data+="<td>$"+jsonRecords[i].amount+"</td>";
				        data+="<td>"+jsonRecords[i].serviceNo+"</td>";
				        data+="<td>"+jsonRecords[i].narration+"</td>";
				        data+="<td>"+jsonRecords[i].postedBy+", on "+jsonRecords[i].dateUpdated+" at "+jsonRecords[i].timeUpdated+"</td>";
				    	data+="</tr>";
				        
				    }
				    
											
											
											data+="</tbody>";
							data+=						"</table>";
							data+=		"</div>";
							data+=	"</div>";
							data+="</div>";	

				getElById('ajax-form-content').innerHTML = data;
			}
		}		
	}
	ajax.open('GET', uri, true);
	ajax.send();
}


function viewPayments(){

	displayPayments('./payments/*');
	
}

function displayMiniStatement(uri){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Processing...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				
				response = ajax.responseText;
				
				var jsonRecords = JSON.parse(response);
				
				var data = "<div class=\"panel\">";
				data+=				"<header class=\"panel-heading\">";
				data+=					"<h3 class=\"panel-title\">";
				data+=						"All Payments";
				data+=					"</h3>";
				data+=				"</header>";
				data+=				"<div class=\"panel-body\">";
				data+=					"<div class=\"table-responsive\">";
				data+=						"<table class=\"table table-hover dataTable table-striped\" id=\"exampleFixedHeader\">";
				data+=							"<thead>";
				data+=								"<tr>";
				data+=									"<th>Txn Type</th>";
				data+=									"<th>Ref. No.</th>";
				data+=									"<th>Amount</th>";
				data+=									"<th>GSV No.</th>";
				data+=									"<th>Narration</th>";
				data+=									"<th>Posted By</th>";
				data+=								"</tr>";
				data+=							"</thead>";
				data+=							"<tfoot>";
				data+=								"<tr>";
				data+=									"<th>Txn Type</th>";
				data+=									"<th>Ref. No.</th>";
				data+=									"<th>Amount</th>";
				data+=									"<th>GSV No.</th>";
				data+=									"<th>Narration</th>";
				data+=									"<th>Posted By</th>";
				data+=								"</tr>";
				data+=							"</tfoot>";
				data+=							"<tbody>";
												
												
												
												
				
				   
				    for (var i in jsonRecords){
				    	var id = jsonRecords[i].id;
				    	
				        data+="<tr>";
				        data+="<td>"+jsonRecords[i].transactionType+"</td>";
				        data+="<td>"+jsonRecords[i].refNo+"</td>";
				        data+="<td>$"+jsonRecords[i].amount+"</td>";
				        data+="<td>"+jsonRecords[i].serviceNo+"</td>";
				        data+="<td>"+jsonRecords[i].narration+"</td>";
				        data+="<td>"+jsonRecords[i].postedBy+", on "+jsonRecords[i].dateUpdated+" at "+jsonRecords[i].timeUpdated+"</td>";
				    	data+="</tr>";
				        
				    }
				    
											
											
											data+="</tbody>";
							data+=						"</table>";
							data+=		"</div>";
							data+=	"</div>";
							data+="</div>";	

				getElById('ajax-form-content').innerHTML = data;
			}
		}		
	}
	ajax.open('GET', uri, true);
	ajax.send();
}


function viewMiniStatement(){

	displayMiniStatement('./payments/MiniStatement');
	
}


function displayAccountDetails(uri){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Processing...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				
				response = ajax.responseText;
				
				var jsonRecords = JSON.parse(response);
				
				var data = "";//"<div class='page animsition'>";
				data+=				"<div class='page-header'>";
				data+=					"<h1 class='page-title font-size-26 font-weight-100'>Account Details</h1>";

				data+=				"</div>";
				//data+="<div class='page-content container-fluid'>";
				//data+="<div class='row' data-plugin='matchHeight' data-by-row='true'>";
				
							for (var i in jsonRecords){
									var totalCr = jsonRecords[i].sumCredits;
									var totalDr = jsonRecords[i].sumDebits;
									var balance = totalCr-totalDr;
									
									          
									    	data+="<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12 info-panel'>";
									    		data+="<div class='widget widget-shadow'>";
									    			data+="<div class='widget-content bg-white padding-20'>";
									               
									    				data+="<span class='margin-left-15 font-weight-400'>SUM OF CREDITS</span>";
									    					data+="<div class='content-text text-center margin-bottom-0'>";
									    						data+="<i class='text-success icon wb-triangle-up font-size-20'>";
									    						data+="</i>";
									    						data+="<span class='font-size-40 font-weight-100'>$"+jsonRecords[i].sumCredits+"</span>";
									                 
									    					data+="</div>";
									    			data+="</div>";
									    		data+="</div>";
									    	data+="</div>";
									          
									    		
									    	data+="<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12 info-panel'>";
									    		data+="<div class='widget widget-shadow'>";
									    			data+="<div class='widget-content bg-white padding-20'>";
									                
									    				data+="<span class='margin-left-15 font-weight-400'>SUM OF DEBITS</span>";
									    					data+="<div class='content-text text-center margin-bottom-0'>";
									    						data+="<i class='text-danger icon wb-triangle-down font-size-20'>";
									    						data+="</i>";
									    						data+="<span class='font-size-40 font-weight-100'>$"+jsonRecords[i].sumDebits+"</span>";
									                  
									    					data+="</div>";
									    			data+="</div>";
									    		data+="</div>";
									    	data+="</div>";
									          
									    		
									    	data+="<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12 info-panel'>";
									    		data+="<div class='widget widget-shadow'>";
									    			data+="<div class='widget-content bg-white padding-20'>";
									               
									    				data+="<span class='margin-left-15 font-weight-400'>Number OF CR AND DR</span>";
									    					data+="<div class='content-text text-center margin-bottom-0'>";
									    						data+="<i class='text-warning icon wb-triangle-left font-size-20'>";
									    						data+="</i>";
									    						data+="<span class='font-size-40 font-weight-100'>"+jsonRecords[i].countCredits+", "+jsonRecords[i].countDebits+"</span>";
									                  
									    					data+="</div>";
									    			data+="</div>";
									    		data+="</div>";
									    	data+="</div>";
									          
									    														
									    	data+="<div class='col-lg-6 col-md-6 col-sm-6 col-xs-12 info-panel'>";
									    		data+="<div class='widget widget-shadow'>";
									    			data+="<div class='widget-content bg-white padding-20'>";
									                
									    				data+="<span class='margin-left-15 font-weight-400'>ACCOUNT BALANCE</span>";
									    					data+="<div class='content-text text-center margin-bottom-0'>";
									    						data+="<i class='text-success icon wb-triangle-up font-size-20'>";
									    						data+="</i>";
									    						data+="<span class='font-size-40 font-weight-100'>$"+balance+"</span>";
									                  
									    					data+="</div>";
									    			data+="</div>";
									    		data+="</div>";
									    	data+="</div>";
									          
									   	    	
									      
									        
							}
							
							 //data+="</div>";
								//data+="</div>";	
			  data+=	""//"</div>";
						

				getElById('ajax-form-content').innerHTML = data;
			}
		}		
	}
	ajax.open('GET', uri, true);
	ajax.send();
}


function viewAccountDetails(){

	displayAccountDetails('./payments/accountdetails');
	
}

function deleteS(id, uName){
	bootbox.alert("Bullshit"+uri+uName);
}


//DELETE
function deleteUser(id){
	var uri = './users/deleteUser?deleteId='+id;
    var reloadId = 2;
    var message = "User Deletion successful";
    deleteStuff(uri, message, reloadId);
}

function deleteStaff(id){
	var uri = './registerPerson/deleteStaff?deleteId='+id;
	var reloadId = 1;
	var message = "Staff Deletion successful";
    deleteStuff(uri, message, reloadId);
}

function deleteService(id){
	var uri = './services/deleteService?deleteId='+id;
    var reloadId = 5;
    var message = "Service Cancellation successful";
    deleteStuff(uri, message, reloadId);
}

function deleteStuff(uri, message, reloadId){
	
	bootbox.confirm('Are you sure you want to do delete operation?', function(result){
		if(result){
			
			var ajax = new XMLHttpRequest();
			
			ajax.onreadystatechange = function(){
				if(ajax.readyState<4)
					getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Deleting...";
				
				if(ajax.readyState == 4){
					if(ajax.status == 200){
						bootbox.alert(message);
						if(reloadId == 1)
							viewPeople();
						else if(reloadId == 2)
							viewUsers();
						else if(reloadId == 3)
							viewServices();
						else if(reloadId == 4)
							viewPayments();
						else if(reloadId == 5)
							pendingServices();
						
					}
					else{
						bootbox.alert("Delete operation failed! An error occured!");
						if(reloadId == 1)
							viewStaff();
						else if(reloadId == 2)
							viewUsers();
						else if(reloadId == 3)
							viewServices();
						else if(reloadId == 4)
							viewPayments();
						else if(reloadId == 5)
							pendingServices();
					}
				}
			}
			ajax.open('GET', uri, true);
			ajax.send();
			
		}
	});
}