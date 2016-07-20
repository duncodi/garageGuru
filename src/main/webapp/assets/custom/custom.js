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
	save(params, "./registerPerson/*", message);
}

function save(params, uri, message){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function(){
		if(ajax.readyState<4)
			getElById('ajax-form-content').innerHTML = "Loading...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				//getElById('ajax-form-content').innerHTML = ajax.responseText;
				bootbox.alert(message);
				createPerson();
			}
			else
				bootbox.alert("Failed!")
		}
	}
	ajax.open("POST", uri, true);
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send(params);
}