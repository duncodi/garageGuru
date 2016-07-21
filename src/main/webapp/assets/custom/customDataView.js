function getElById(el){
	return document.getElementById(el);
}

function displayStaff(uri){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif'/> Loading...";
		
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
				        data+="<td><a class=\"btn btn-danger btn-block btn-xs\" onclick=\"deletePerson("+id+");\">Delete</a></td>";
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
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif'/> Loading...";
		
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
				    	
				        data+="<tr>";
				        data+="<td>"+jsonRecords[i].username+"</td>";
				        data+="<td>"+jsonRecords[i].userLevel+"</td>";
				        data+="<td>"+jsonRecords[i].lastLoginDate+" at "+jsonRecords[i].lastLoginTime+"</td>";
				        data+="<td>"+jsonRecords[i].loggedIn+"</td>";
				        data+="<td>"+jsonRecords[i].dateUpdated+" at "+jsonRecords[i].timeUpdated+"</td>";
				        
				        data+="<td><a class=\"btn btn-warning btn-block btn-xs\" onclick=\"editPerson("+id+");\">Edit</a></td>";
				        data+="<td><a class=\"btn btn-danger btn-block btn-xs\" onclick=\"deletePerson("+id+");\">Delete</a></td>";
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
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif'/> Loading...";
		
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
				data+=									"<th>Complete?</th>";
				data+=									"<th>Posted By</th>";
				data+=								"</tr>";
				data+=							"</tfoot>";
				data+=							"<tbody>";
												
												
												
												
				
				   
				    for (var i in jsonRecords){
				    	var id = jsonRecords[i].id;
				    	
				        data+="<tr>";
				        data+="<td>"+jsonRecords[i].serviceNo+"</td>";
				        data+="<td>"+jsonRecords[i].regNo+"</td>";
				        data+="<td>"+jsonRecords[i].idNumber+"</td>";
				        data+="<td>"+jsonRecords[i].fullName+"</td>";
				        data+="<td>"+jsonRecords[i].phone+"</td>";
				        data+="<td>"+jsonRecords[i].description+"</td>";
				        data+="<td>"+jsonRecords[i].serviceComplete+"</td>";
				        data+="<td>"+jsonRecords[i].postedBy+", on "+jsonRecords[i].dateUpdated+" at "+jsonRecords[i].timeUpdated+"</td>";
				        
				        data+="<td><a class=\"btn btn-warning btn-block btn-xs\" onclick=\"editPerson("+id+");\">Edit</a></td>";
				        data+="<td><a class=\"btn btn-danger btn-block btn-xs\" onclick=\"deletePerson("+id+");\">Delete</a></td>";
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

function displayPayments(uri){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif'/> Loading...";
		
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
				        data+="<td>"+jsonRecords[i].amount+"</td>";
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
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif'/> Loading...";
		
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
				        data+="<td>"+jsonRecords[i].amount+"</td>";
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