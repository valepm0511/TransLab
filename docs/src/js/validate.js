// validando email
window.validateEmail = (email,password) => {
	if(email.length > 0 || email == null){
		if(email.indexOf('@') < 0 ){
			alert('ingrese un email valido');
			return false;
		}
		const tokens = email.split('@');
		if(tokens.length != 2){
			alert('ingrese un email valido');
			return false;
		}
		const domTokens = tokens[1].split('.');
		if(domTokens.length != 2){
			alert('ingrese un email valido');
			return false;
		}
		if(domTokens[0].length < 1){
			alert('ingrese un email valido');
			return false;
		}
		if(domTokens[1].length < 1){
			alert('ingrese un email valido');
			return false;
		}
		document.cookie = "emailCK="+email;
		window.validatePassword(password);
		return true;
	}else{
		return false;
	}
};

//valiando password
window.validatePassword = (password) => {
	if(password.toString().length <= 8 && password.toString().length >= 6){
		if(isNaN(password) == false){
			if(!password.toString().trim() == " "){
				window.view.menu();
				return true;
			}else{ 
				alert('ingrese contraseña valida');
				return false;
			}
		}else{
			alert('ingrese contraseña valida');
			return false;
		}
	}else{
		alert('ingrese contraseña valida');
		return false;
	}
}

//btn que valida las 2 funciones
window.validateLogin = () => {
	const email = document.getElementById('emailUser').value;
	const password = document.getElementById('passwordUser').value;
	const emailUserPerfil = document.getElementById('emailUserPerfil');
	console.log(emailUserPerfil);
	window.validateEmail(email,password);
	console.log('---',email);
	console.log('---',password);
	
}

// valiando tarjeta bip
window.validateBipCard = (bip) => {
	if(bip.toString().length === 8){
		if(isNaN(bip) == false){
			if(!bip.toString().trim() == " "){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}else{
		return false;
	}
}

