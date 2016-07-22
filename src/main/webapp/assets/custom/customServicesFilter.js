function getElById(el){
	return document.getElementById(el);
}

function displayFilterForm(form){
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

function createServicesFilter(){
	var form = 	"<div class='panel'>" +
					"<div class='panel-heading'>" +
						"<h3 class='panel-title'>Filter Garage Services By Date</h3>" +
					"</div>" +
					"<div class='panel-body container-fluid'>" +
						"<form autocomplete='off' method='post' action='#'>" +
						//"<div class='input-daterange' data-plugin='datepicker'>" +
						
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' data-plugin='datepicker' id='start' name='start' />" +
								"<label class='floating-label'>Starting From?</label>" +
							"</div>" +
							
							"<div class='form-group form-material floating'>" +
								"<input type='text' class='form-control' data-plugin='datepicker' id='end' name='end' />" +
								"<label class='floating-label'>Ending on?</label>" +
							"</div>" +
							
						//"</div>" +
						"</form>" +
						"<a class='btn btn-primary btn-block' onclick='filterServices();'>View Garage Services</a>" +
					"</div>" +
				"</div>";
		
	displayFilterForm(form);
}

function filterServices(){
	var dateFrom = getElById("start").value;
	var dateTo = getElById("end").value;
	
	var params = 'dateFrom='+encodeURIComponent(dateFrom) + '&dateTo='+encodeURIComponent(dateTo);
	
	executeServicesFilter(params);
}

function executeServicesFilter(params){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Searching...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				
				response = ajax.responseText;
				
				if(response==0){
					getElById('ajax-form-content').innerHTML = "<img src='assets/images/error.ico' width='30px' height='30px' /> <br> No search results found esse";
				}
				else
				{
					var jsonRecords = JSON.parse(response);
					
					var data = "<div class=\"panel\">";
					data+=				"<header class=\"panel-heading\">";
					data+=					"<h3 class=\"panel-title\">";
					data+=						"Filtered Garage Services By Date Range";
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
	}
	ajax.open("POST", './filterservices/*', true);
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send(params);
}