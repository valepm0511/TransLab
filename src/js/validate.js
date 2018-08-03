// validando email
window.validateEmail = (email) => {
	if(email.indexOf('@') < 0 ){
		return false;
	}
	const tokens = email.split('@');
	if(tokens.length != 2){//verifica q solo haya un @
		return false;
	}
	const domTokens = tokens[1].split('.');
	if(domTokens.length != 2){
		return false;
	}
	if(domTokens[0].length < 1){
		return false;
	}
	if(domTokens[1].length < 1){
		return false;
	}
	return true;
};

//valiando password
window.validatePassword = (password) => {
	if(password.toString().length <= 8 && password.toString().length >= 6){
		if(isNaN(password) == false){
			if(!password.toString().trim() == " "){
				return true;
			}else{ return false;}
		}else{
			return false;
		}
	}else{
		return false;
	}
}
// valiando tarjeta bip
window.validateBipCard = (bip) => {
	if(bip.toString().length === 8){
		if(isNaN(bip) == false){
			if(!bip.toString().trim() == " "){
				return true;
			}else{ return false;}
		}else{
			return false;
		}
	}else{
		return false;
	}
}

