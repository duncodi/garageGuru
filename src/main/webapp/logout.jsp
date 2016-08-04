<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Garage Guru</title>
</head>
<body onload="logout();">
<div id="logout"></div>
</body>
</html>

<script type="text/javascript">
	
	function logout(){
		var params = '';
		var ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function(){
			if(ajax.readyState<4)
				document.getElementById('logout').innerHTML = "<img src='assets/images/AjaxLoader.gif' width='20px' height='20px'/> Smoking you out. Bye...";
			
			if(ajax.readyState == 4){
				if(ajax.status == 200){
					window.location.href="login.jsp";
				}
			}
		}
		ajax.open("POST", './login/logout', true);
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		ajax.send(params);
		
	};
	
</script>