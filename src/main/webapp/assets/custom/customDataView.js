function getElById(el){
	return document.getElementById(el);
}

function displayData(uri){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = 'Loading...';
		
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
	
	displayData('./registerPerson/*');
	
}