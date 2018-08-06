window.view = {}
window.view.menu = () => {
	let contMenu = document.getElementById('contApp');
	contMenu.innerHTML = `
	<div class="container-fluid p-0 contMenu">
	<nav class="navbar navbar-expand-lg navStyle">
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	<i class="fas fa-bars text-white p-2"></i></span>
	</button>
	<a class="navbar-brand text-white p-2" href="#">TRANS-LAB</a>
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
	<div class="navbar-nav bg-white p-2">
	<button type="button" class="nav-item nav-link active btnMenu" onclick="window.view.saldo()"><i class="fas fa-dollar-sign"></i>   Ver Saldo</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.calcular()"><i class="fas fa-calculator"></i> Calcular Tarifa</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.perfil()"><i class="fas fa-user"></i> Perfil</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.question()"><i class="fas fa-align-justify"></i> Preguntas Fracuentes</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.menu()"><i class="fas fa-home"></i> Home</button>
	<button type="button" class="nav-item nav-link btnMenu" href="#"><i class="far fa-window-close"></i> Cerar Sesión</button>
	</div>
	</div>
	</nav>
	<div class="row justify-content-center mt-5">
	<div class="col-10 pt-5 mt-5">
	<button type="button" class="btn btnMenuHome col-12 p-2 my-2" onclick="window.view.saldo()">Ver Saldo</button>
	<button type="button" class="btn btnMenuHome col-12 p-2 my-2" onclick="window.view.calcular()">Calcular Tarifa</button>
	<button type="button" class="btn btnMenuHome col-12 p-2 my-2" onclick="window.view.perfil()">Perfil</button>
	<button type="button" class="btn btnMenuHome col-12 p-2 my-2" onclick="window.view.question()">Preguntas Fracuentes</button>
	</div>
	</div>
	</div>
	`;

}

window.view.perfil = () =>{
	let contMenu = document.getElementById('contApp');
	contMenu.innerHTML = `
	<div class="container-fluid p-0 contMenu heightPerfil">
	<nav class="navbar navbar-expand-lg navStyle">
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	<i class="fas fa-bars text-white p-2"></i></span>
	</button>
	<a class="navbar-brand text-white p-2" href="#">TRANS-LAB</a>
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
	<div class="navbar-nav bg-white p-2">
	<button type="button" class="nav-item nav-link active btnMenu" onclick="window.view.saldo()"><i class="fas fa-dollar-sign"></i>   Ver Saldo</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.calcular()"><i class="fas fa-calculator"></i> Calcular Tarifa</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.perfil()"><i class="fas fa-user"></i> Perfil</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.question()"><i class="fas fa-align-justify"></i> Preguntas Fracuentes</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.menu()"><i class="fas fa-home"></i> Home</button>
	<button type="button" class="nav-item nav-link btnMenu" href="#"><i class="far fa-window-close"></i> Cerar Sesión</button>
	</div>
	</div>
	</nav>
	<div class="row justify-content-center avatarPerfil m-0">
	<div class="col-8 p-4">
	<img src="src/img/avatar.png" class="img-fluid rounded-circle d-block m-auto">
	</div>
	</div>
	<div class="row justify-content-center m-0">
	<div class="col-10">
	<p class="infoEmail mt-5" id="emailUserPerfil"></p>
	<input type="text" id="bipNumber" placeholder="Ingrese numero de Tarjeta" class="form-control my-4 inputNumberCard">
	<button type="button" class="btn btnMenuHome col-12 mb-3" id="btnBip" onclick="window.saveCard()">Agregar tarjeta</button>
	<div id="containerBip">

	</div>
	</div>
	</div>
	</div>
	`;
	window.saveCard();
}

window.view.question = () => {
	let contMenu = document.getElementById('contApp');
	contMenu.innerHTML = `
	<div class="container-fluid p-0 contMenu heightPerfil">
	<nav class="navbar navbar-expand-lg navStyle">
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	<i class="fas fa-bars text-white p-2"></i></span>
	</button>
	<a class="navbar-brand text-white p-2" href="#">TRANS-LAB</a>
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
	<div class="navbar-nav bg-white p-2">
	<button type="button" class="nav-item nav-link active btnMenu" onclick="window.view.saldo()"><i class="fas fa-dollar-sign"></i>   Ver Saldo</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.calcular()"><i class="fas fa-calculator"></i> Calcular Tarifa</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.perfil()"><i class="fas fa-user"></i> Perfil</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.question()"><i class="fas fa-align-justify"></i> Preguntas Fracuentes</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.menu()"><i class="fas fa-home"></i> Home</button>
	<button type="button" class="nav-item nav-link btnMenu" href="#"><i class="far fa-window-close"></i> Cerar Sesión</button>
	</div>
	</div>
	</nav>
	<div class="row justify-content-center avatarPerfil m-0">
	<div class="col-8 p-4">
	<p class="display-4 text-center text-white titlePF">Preguntas Frecuentes</p>
	</div>
	</div>
	<div class="row justify-content-center m-0">
	<div class="col-12">
	<div id="accordion" role="tablist" class="mt-3 mb-3">
	<div class="card">
	<div class="card-header" role="tab" id="headingOne">
	<h5 class="mb-0">
	<a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" class="titleAccordeon">
	Problemas y cuidados
	</a>
	</h5>
	</div>
	<div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
	<div class="card-body">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros leo, venenatis a eleifend eget, faucibus at urna. Proin non pellentesque est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vel elit quis orci aliquet posuere vel eu nunc. Praesent lacus arcu, tempor ac diam at, egestas placerat enim. Duis a justo vel arcu venenatis posuere eu vel tortor. Quisque facilisis mauris neque, et congue quam condimentum in. Donec eleifend dapibus mattis. Vestibulum ligula velit, luctus dapibus orci ac, congue viverra diam. Nam at leo massa. Cras lectus mi, vulputate nec viverra non, finibus nec mauris. Maecenas in hendrerit sem.
	</div>
	</div>
	</div>
	<div class="card">
	<div class="card-header" role="tab" id="headingTwo">
	<h5 class="mb-0">
	<a class="collapsed titleAccordeon" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
	Tarjeta personalizada
	</a>
	</h5>
	</div>
	<div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
	<div class="card-body">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros leo, venenatis a eleifend eget, faucibus at urna. Proin non pellentesque est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vel elit quis orci aliquet posuere vel eu nunc. Praesent lacus arcu, tempor ac diam at, egestas placerat enim. Duis a justo vel arcu venenatis posuere eu vel tortor. Quisque facilisis mauris neque, et congue quam condimentum in. Donec eleifend dapibus mattis. Vestibulum ligula velit, luctus dapibus orci ac, congue viverra diam. Nam at leo massa. Cras lectus mi, vulputate nec viverra non, finibus nec mauris. Maecenas in hendrerit sem.
	</div>
	</div>
	</div>
	<div class="card">
	<div class="card-header" role="tab" id="headingThree">
	<h5 class="mb-0">
	<a class="collapsed titleAccordeon" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
	Tarjetas bancarias
	</a>
	</h5>
	</div>
	<div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
	<div class="card-body">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros leo, venenatis a eleifend eget, faucibus at urna. Proin non pellentesque est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vel elit quis orci aliquet posuere vel eu nunc. Praesent lacus arcu, tempor ac diam at, egestas placerat enim. Duis a justo vel arcu venenatis posuere eu vel tortor. Quisque facilisis mauris neque, et congue quam condimentum in. Donec eleifend dapibus mattis. Vestibulum ligula velit, luctus dapibus orci ac, congue viverra diam. Nam at leo massa. Cras lectus mi, vulputate nec viverra non, finibus nec mauris. Maecenas in hendrerit sem.
	</div>
	</div>
	</div>
	<div class="card">
	<div class="card-header" role="tab" id="headingFour">
	<h5 class="mb-0">
	<a class="collapsed titleAccordeon" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
	Puntos y Centros bip!
	</a>
	</h5>
	</div>
	<div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour">
	<div class="card-body">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros leo, venenatis a eleifend eget, faucibus at urna. Proin non pellentesque est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vel elit quis orci aliquet posuere vel eu nunc. Praesent lacus arcu, tempor ac diam at, egestas placerat enim. Duis a justo vel arcu venenatis posuere eu vel tortor. Quisque facilisis mauris neque, et congue quam condimentum in. Donec eleifend dapibus mattis. Vestibulum ligula velit, luctus dapibus orci ac, congue viverra diam. Nam at leo massa. Cras lectus mi, vulputate nec viverra non, finibus nec mauris. Maecenas in hendrerit sem.
	</div>
	</div>
	</div>
	<div class="card">
	<div class="card-header" role="tab" id="headingFive">
	<h5 class="mb-0">
	<a class="collapsed titleAccordeon" data-toggle="collapse" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
	Atención al Cliente
	</a>
	</h5>
	</div>
	<div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive">
	<div class="card-body">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros leo, venenatis a eleifend eget, faucibus at urna. Proin non pellentesque est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vel elit quis orci aliquet posuere vel eu nunc. Praesent lacus arcu, tempor ac diam at, egestas placerat enim. Duis a justo vel arcu venenatis posuere eu vel tortor. Quisque facilisis mauris neque, et congue quam condimentum in. Donec eleifend dapibus mattis. Vestibulum ligula velit, luctus dapibus orci ac, congue viverra diam. Nam at leo massa. Cras lectus mi, vulputate nec viverra non, finibus nec mauris. Maecenas in hendrerit sem.
	</div>
	</div>
	</div>
	<div class="card">
	<div class="card-header" role="tab" id="headingSix">
	<h5 class="mb-0">
	<a class="collapsed titleAccordeon" data-toggle="collapse" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
	Carga online y convenios
	</a>
	</h5>
	</div>
	<div id="collapseSix" class="collapse" role="tabpanel" aria-labelledby="headingSix">
	<div class="card-body">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros leo, venenatis a eleifend eget, faucibus at urna. Proin non pellentesque est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vel elit quis orci aliquet posuere vel eu nunc. Praesent lacus arcu, tempor ac diam at, egestas placerat enim. Duis a justo vel arcu venenatis posuere eu vel tortor. Quisque facilisis mauris neque, et congue quam condimentum in. Donec eleifend dapibus mattis. Vestibulum ligula velit, luctus dapibus orci ac, congue viverra diam. Nam at leo massa. Cras lectus mi, vulputate nec viverra non, finibus nec mauris. Maecenas in hendrerit sem.
	</div>
	</div>
	</div>
	<div class="card">
	<div class="card-header" role="tab" id="headingSeven">
	<h5 class="mb-0">
	<a class="collapsed titleAccordeon" data-toggle="collapse" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
	Infraestructura bip!
	</a>
	</h5>
	</div>
	<div id="collapseSeven" class="collapse" role="tabpanel" aria-labelledby="headingSeven">
	<div class="card-body">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros leo, venenatis a eleifend eget, faucibus at urna. Proin non pellentesque est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vel elit quis orci aliquet posuere vel eu nunc. Praesent lacus arcu, tempor ac diam at, egestas placerat enim. Duis a justo vel arcu venenatis posuere eu vel tortor. Quisque facilisis mauris neque, et congue quam condimentum in. Donec eleifend dapibus mattis. Vestibulum ligula velit, luctus dapibus orci ac, congue viverra diam. Nam at leo massa. Cras lectus mi, vulputate nec viverra non, finibus nec mauris. Maecenas in hendrerit sem.
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	</div>
	`;
}

window.view.saldo = () => {
	let contMenu = document.getElementById('contApp');
	contMenu.innerHTML = `
	<div class="container-fluid p-0 contMenu">
	<nav class="navbar navbar-expand-lg navStyle">
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	<i class="fas fa-bars text-white p-2"></i></span>
	</button>
	<a class="navbar-brand text-white p-2" href="#">TRANS-LAB</a>
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
	<div class="navbar-nav bg-white p-2">
	<button type="button" class="nav-item nav-link active btnMenu" onclick="window.view.saldo()"><i class="fas fa-dollar-sign"></i>   Ver Saldo</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.calcular()"><i class="fas fa-calculator"></i> Calcular Tarifa</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.perfil()"><i class="fas fa-user"></i> Perfil</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.question()"><i class="fas fa-align-justify"></i> Preguntas Fracuentes</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.menu()"><i class="fas fa-home"></i> Home</button>
	<button type="button" class="nav-item nav-link btnMenu" href="#"><i class="far fa-window-close"></i> Cerar Sesión</button>
	</div>
	</div>
	</nav>
	<div class="row justify-content-center m-0">
	<div class="bannerBip col-12">
	<p class="lead text-white mt-2">Ver Saldo bip!</p>
	</div>
	<div class="col-12 p-4">
	
	<form>
	<div class="form-group">
	
	<select class="form-control" id="selectCard">

	</select>
	</div>
	</form>
	<button type="button" class="btn btnMenuHome col-12 mb-3" id="btnBip" onclick="window.getInfoBip()">Ver</button>
	<div class="form-group" id="viewSaldo">
	<div id="containerApiBip">

	</div>
	
	</div>
	</div>

	</div>
	</div>
	`;
	window.showCard();
}

window.view.calcular = () => {
	let contMenu = document.getElementById('contApp');
	contMenu.innerHTML = `
	<div class="container-fluid p-0 contMenu">
	<nav class="navbar navbar-expand-lg navStyle">
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	<i class="fas fa-bars text-white p-2"></i></span>
	</button>
	<a class="navbar-brand text-white p-2" href="#">TRANS-LAB</a>
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
	<div class="navbar-nav bg-white p-2">
	<button type="button" class="nav-item nav-link active btnMenu" onclick="window.view.saldo()"><i class="fas fa-dollar-sign"></i>   Ver Saldo</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.calcular()"><i class="fas fa-calculator"></i> Calcular Tarifa</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.perfil()"><i class="fas fa-user"></i> Perfil</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.question()"><i class="fas fa-align-justify"></i> Preguntas Fracuentes</button>
	<button type="button" class="nav-item nav-link btnMenu" onclick="window.view.menu()"><i class="fas fa-home"></i> Home</button>
	<button type="button" class="nav-item nav-link btnMenu" href="#"><i class="far fa-window-close"></i> Cerar Sesión</button>
	</div>
	</div>
	</nav>
	<div class="row justify-content-center m-0">
	<div class="bannerBip col-12">
	<p class="lead text-white mt-2">Calcular Tarifa</p>
	</div>
	<div class="col-12 p-4">
	<form>
	<p>Selecciones Tarjeta</p>
	<div class="form-group">
	<select class="form-control" id="selectCard">

	</select>
	</div>
	<p>Selecciones Tarifa</p>
	<div class="form-group">
	<select class="form-control" id="selectTarifa">
	<option>Tarifas</option>
	<option value="760">Tarifa Alta: $760</option>
	<option value="680">Tarifa Media: $680</option>
	<option value="630">Tarifa Baja: $630</option>
	</select>
	</div>
	</form>
	<button type="button" class="btn btnMenuHome col-12 mb-3" id="btnBip" onclick="window.getInfoBip('tarifa')">Calcular</button>
	<div class="form-group" id="viewSaldo">
	<div id="containerApiBip">
	</div>
	</div>
	<div id="contSaldoFinal">
	</div>
	</div>
	</div>
	</div>`;
	window.showCard();
}