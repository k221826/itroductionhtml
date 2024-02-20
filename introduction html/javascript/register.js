// JavaScript Document
function validator(){
	var txt_fname = document.getElementById('txt_fname');
	var txt_lname = document.getElementById('txt_lname');
	var txt_phone = document.getElementById('txt_phone');
	var txt_address = document.getElementById('txt_address');
	var txt_email = document.getElementById('txt_email');
	var gender = document.getElementById('gender');
	var state = document.getElementById('state');
	var about = document.getElementById('about');
	var recom = document.getElementById('recom');
	
	if(isAlphabet(txt_fname, "Please enter letters only")){
		if(isAlphabet(txt_lname, "Please enter letters only")){
			if(isNumeric(txt_phone, "Please enter numbers only")){
				if(notEmpty(txt_address, "Please enter your address")){
					if(emailValidator(txt_email, "Please enter a valid email address")){
						if(selectGender(gender, "Please select your gender")){
							if(selectState(state, "Please choose your state")){
								if(selectAbout(about, "Please tell how did you learn about us")){
									if(selectRecom(recom, "Please select your gender")){
										return true;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return false;
}

function isAlphabet(elem, helperMsg){
	var alphaExp = /^[a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}
	else{
		alert(helperMsg);
		return false;
	}
}

function isNumeric(elem, helperMsg){
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression)){
		return true;
	}
	else{
		alert(helperMsg);
		return false;
	}
}

function notEmpty(elem,errMsg){
	if(elem.value.length == 0){
		alert(errMsg);
		return false;
	}
	return true;
}

function emailValidator(elem, helperMsg){
	var emailRestrictions = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
	if(elem.value.match(emailRestrictions)){
		return true;
	}
	else{
		alert(helperMsg);
		return false;
	}
}

function selectGender(elem, helperMsg){
	if((document.registration.gender[0].checked == false) && (document.registration.gender[1].checked == false)){
		alert(helperMsg);
		return false;
	}
	return true;
}

function selectState(elem, helperMsg){
	if(elem.value == "Select State"){
		alert(helperMsg);
		return false;
	}
	else{
		return true;
	}
}

function selectAbout(elem, helperMsg){
	if(!document.registration.about[0].checked && !document.registration.about[1].checked && !document.registration.about[2].checked && !document.registration.about[3].checked){
		alert(helperMsg);
		return false;
	}
	else{
		return true;
	}
}

function selectRecom(elem, helperMsg){
	if((document.registration.recom[0].checked == false) && (document.registration.recom[1].checked == false)){
		alert(helperMsg);
		return false;
	}
	return true;
} 