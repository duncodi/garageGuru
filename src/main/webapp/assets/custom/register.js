/*var register = Custom.extend(Custom.Base, {
	modelId : 'register',
	httpUrl : '/register',
	responseTarget : 'register'	
});
*/

//OBERVERS, SIGNLETON and other design patterns

function getElById(el){
	return document.getElementById(el);
}

function register(){
	var firstName = getElById('firstName').value;
	var secondName = getElById('secondName').value;
	var phone = getElById('phone').value;
	var email = getElById('email').value;
	var garageName = getElById('garageName').value;
	var location = getElById('location').value;
	var country = getElById('country').value;
	var address = getElById('address').value;
	var idNumber = getElById('idNumber').value;
	var garageDescription = getElById('garageDescription').value;
	
	var params = 'firstName=' +encodeURIComponent(firstName) + '&secondName=' + encodeURIComponent(secondName) + '&phone=' + encodeURIComponent(phone) + '&email=' + encodeURIComponent(email) + '&garageName=' + encodeURIComponent(garageName) + '&location=' + encodeURIComponent(location) + '&country=' + encodeURIComponent(country) + '&garageDescription=' + encodeURIComponent(garageDescription) + '&address=' + encodeURIComponent(address) + '&idNumber=' + encodeURIComponent(idNumber); 
	var message = "<i style='color:blue'>Registration Successful. A confirmation email has been sent to "+email+"</i>";
	
	saveRegistration(params, "./register/*", message);
}

function saveRegistration(params, uri, message){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		
		if(ajax.readyState<4)
			getElById('register').innerHTML = "<img src='assets/images/AjaxLoader.gif'/> Saving...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				getElById('register').innerHTML = message;
			}
		}
	}
	ajax.open("POST", uri, true);
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send(params);
}

function completeRegistration(){
	var confirmationKey = getElById('confirmationKey').value;
	var username = getElById('username').value;
	var password = getElById('password').value;
	var confirmPassword = getElById('confirmPassword').value;
	var ownerId = getElById('ownerId').value;
	var garageId = getElById('garageId').value;
	
	var params = 'confirmationKey=' +encodeURIComponent(confirmationKey) + '&username=' +encodeURIComponent(username) + '&password=' +encodeURIComponent(password) + '&ownerId=' +encodeURIComponent(ownerId) + '&garageId=' +encodeURIComponent(garageId);
	var message = "<i style='color:blue'>Registration Complete! <a href='http://localhost:8080/garageGuru/login.jsp'>Login</a></i>";
	
	saveAdmin(params, "./completeRegistration/*", message);
}

function saveAdmin(params, uri, message){
	var ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function(){
		
		if(ajax.readyState<4)
			getElById('confirmRegistration').innerHTML = "<img src='assets/images/AjaxLoader.gif'/> Processing...";
		
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				getElById('confirmRegistration').innerHTML = message;
			}
		}
	}
	ajax.open("POST", uri, true);
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send(params);
}

