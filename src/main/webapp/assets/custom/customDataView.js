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