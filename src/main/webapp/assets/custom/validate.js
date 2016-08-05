function validateSignUp(){
	//NULL CHECK. should return false for A SUCCESS	
	var idNumberIsNull = isNull('idNumber');
	var firstNameIsNull = isNull('firstName');
	var secondNameIsNull = isNull('secondName');
	var phoneIsNull = isNull('phone');
	var emailIsNull = isNull('email');
	var garageNameIsNull = isNull('garageName');
	var addressIsNull = isNull('address');
	var locationIsNull = isNull('location');
	var countryIsNull = isNull('country');
	var garageDescriptionIsNull = isNull('garageDescription');
	
	//EMAIL CHECK... should return true for A SUCCESS
	var emailIsEmail = isEmail('email');
	var phoneIsPhone = isPhone('phone');
	
	//LENGTH CHECK
	var idNumberLength = isNull('idNumber');
	var firstNameLength = isNull('firstName');
	var secondNameLength = isNull('secondName');
	var phoneLength = isNull('phone');
	var emailLength = isNull('email');
	var garageNameLength = isNull('garageName');
	var addressLength = isNull('address');
	var locationLength = isNull('location');
	var countryLength = isNull('country');
	var garageDescriptionLength = isNull('garageDescription');	
	
	if((idNumberIsNull==false && firstNameIsNull==false && secondNameIsNull==false && phoneIsNull==false && emailIsNull==false && garageNameIsNull==false && addressIsNull==false && locationIsNull==false && countryIsNull==false && garageDescriptionIsNull==false) && (emailIsEmail==true) && (phoneIsPhone==true) && (idNumberLength==true && firstNameLength==true && secondNameLength==true && phoneLength==true && emailLength==true && garageNameLength==true && addressLength==true && locationLength==true && countryLength==true && garageDescriptionLength==true))
		register();
	else
		return false;
}