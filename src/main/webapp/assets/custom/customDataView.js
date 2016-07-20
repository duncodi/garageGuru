function getElById(el){
	return document.getElementById(el);
}

function displayData(data, uri){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = 'Loading...';
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				getElById('ajax-form-content').innerHTML = data;
			}
		}		
	}
	ajax.open('GET', uri, true);
	ajax.send();
}


function viewPeople(){
	
	var data = "<div class='panel'>" +
					"<header class='panel-heading'>" +
						"<h3 class='panel-title'>" +
							"Fixed Header" +
						"</h3>" +
					"</header>" +
					"<div class='panel-body'>" +
						"<div class='table-responsive'>" +
							"<table class='table table-hover dataTable table-striped' id='exampleFixedHeader'>" +
								"<thead>" +
									"<tr>" +
										"<th>Name</th>" +
										"<th>Email</th>" +
										"<th>Phone</th>" +
										"<th>Id Number</th>" +
									"</tr>" +
								"</thead>" +
								"<tfoot>" +
									"<tr>" +
										"<th>Name</th>" +
										"<th>Email</th>" +
										"<th>Phone</th>" +
										"<th>Id Number</th>" +
									"</tr>" +
								"</tfoot>" +
								"<tbody>" +
									"<tr>" +
										"<td>Damon</td>" +
										"<td>Damon</td>" +
										"<td>Damon</td>" +
										"<td>Damon</td>" +
									"</tr>" +
								"</tbody>" +
							"</table>" +
						"</div>" +
					"</div>" +
				"</div>";	
	
	displayData(data, './index.jsp');
	
}