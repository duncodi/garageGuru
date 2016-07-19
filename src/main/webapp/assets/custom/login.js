function getElById(el){
	return document.getElementById(el);
}

function login(){
	var username = getElById('username').value;
	var password = getElById('password').value;
	
	var params = 'username=' + encodeURIComponent(username) + '&password=' +encodeURIComponent(password);
	//var errorMessage = "<i style='color:red'>Oops! Sorry. The username-password combination din't work</i>";
	loginAction(params, './login/*');
}


function loginAction(params, uri){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4){
			if(ajax.status == 200){
				if(ajax.responseText == "")
					location.href="http://localhost:8080/garageGuru/index.jsp";
				else
					getElById("errorMsg").innerHTML = ajax.responseText;
				
			}
		}
	}
	ajax.open("POST", uri, true);
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send(params);
}

/*
var loginCheck = responseText;
				if(loginCheck==1){
					window.location.href("http://localhost:8080/garageGuru/index.jsp");
				}
				else{
					getElById('errorMsg').innerHTML = ajax.responseText;
				}
*/