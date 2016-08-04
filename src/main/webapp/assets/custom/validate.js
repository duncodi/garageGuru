function validate(){
}

function getElById(el){
	return document.getElementById(el);
}

function isNull(elId){
	var field = getElById(elId);
	var fieldId = field.id;
	var fieldValue = field.value;
	
	if(fieldValue){
		commonOkay(elId);
		return false;
	}
	else{
		commonError(elId);
		return true;
	}
	
}


function commonOkay(elId){
	getElById(elId).style.backgroundColor = "#e1ffdc";
	getElById(elId).style.borderColor = "#1b9506";
	getElById('signUpButton').disabled = false;
	
	var x = getElById('signUpButton').disabled = false;
	console.log(x);
}

function commonError(elId){
	getElById(elId).style.backgroundColor = "#f5dddd";
	getElById(elId).style.borderColor = "red";
	getElById(elId).style.borderWidth = "1px";
	var fieldName = getElById(elId).name;
	getElById(elId).placeholder = fieldName+" is required";
	getElById('signUpButton').disabled = true;
	var x = getElById('signUpButton').disabled = true;
	console.log(x);
}

