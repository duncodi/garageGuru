function getElById(el){
	return document.getElementById(el);
}

function isNull(elId){
	var field = getElById(elId);
	var fieldId = field.id;
	var fieldValue = field.value;
	var fieldName = getElById(elId).name;
	var message = fieldName+" is required";
	
	if(fieldValue){
		commonOkay(elId);
		return false;
	}
	else{
		commonError(elId, message);
		return true;
	}
	
}

function isEmail(elId){
	var field = getElById(elId);
	var fieldId = field.id;
	var fieldValue = field.value;
	var fieldName = getElById(elId).name;
	var message = "Please provide a valid email";
	
	var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var checkEmail = reg.test(fieldValue);
	
	if(checkEmail==true){
		commonOkay(elId);
		return true
	}
	else{
		commonError(elId, message);
		return false
	}
}

function isPhone(elId){
	var field = getElById(elId);
	var fieldId = field.id;
	var fieldValue = field.value;
	var fieldName = getElById(elId).name;
	var message = "A valid cell phone must start with 7, e.g 712345678";
	
	var size = fieldValue.length;
	size = parseFloat(size);
	
	var phone = parseFloat(fieldValue);
	
	if(size==9 && phone>=700000000 && phone<=799999999){
		commonOkay(elId);
		return true;
	}
	else{
		commonError(elId, message);
		return false;
	}
}

function setLength(elId, minSize, maxSize){
	minSize = parseFloat(minSize);
	maxSize = parseFloat(maxSize);
	var field = getElById(elId);
	var fieldId = field.id;
	var fieldValue = field.value;
	var fieldName = getElById(elId).name;
	var message = "The length of "+elId+" must be between "+minSize+" to "+maxSize;
	
	var size = fieldValue.length;
	size = parseFloat(size);
	
	var phone = parseFloat(fieldValue);
	
	if(size>=minSize && size<=maxSize){
		commonOkay(elId);
		return true;
	}
	else{
		commonError(elId, message);
		return false;
	}
}

function commonOkay(elId){
	getElById(elId).style.backgroundColor = "#fff";
	getElById(elId).style.borderColor = "#1b9506";
	getElById(elId+'_error').innerHTML = "";
}

function commonError(elId, message){
	getElById(elId).style.backgroundColor = "#f5dddd";
	getElById(elId).style.borderColor = "red";
	getElById(elId).style.borderWidth = "1px";
	getElById(elId).placeholder = message;
	getElById(elId+'_error').innerHTML = message;
}