//conectando a la api de bip
window.getInfoBip = (tipo) =>{
	let bipNumber = document.getElementById('selectCard').value;

	//document.getElementById('bipNumber').value = '';
	let urlFetchBip = 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+bipNumber;
	console.log("fetch bip "+urlFetchBip);
	fetch(urlFetchBip)
	.then(bip => bip.json())
	.then(bipJSON => {
		bipOk(bipJSON);
	})
	.catch(error => {
		console.error("No pudimos obtener respuesta");
		console.error("ERROR > " + error.stack);
	});
	// recorriendo api bip y mostrando en pantalla
	let containerApiBip = document.getElementById('viewSaldo');
	// let containerApiBipTarifa = document.getElementById('viewSaldoTarifa');
	let bipOk = (bipJSON) => {
	// console.log(bipJSON);
	containerApiBip.innerHTML = '';
	for(let i in bipJSON){
		console.log(bipJSON[i]);
		containerApiBip.innerHTML = `
		<div class="row">
		<div class="col-12">
		<p class="bg-dark text-white text-center p-1">Saldo Actual</p>
		<div class="contInfoBip">
		<input type="hidden" id="saldoTarjetaBip" value="${bipJSON['saldoTarjeta']}">
		<p class="text-center text-white lead mt-3 mb-3"><b>Saldo: </b>${bipJSON['saldoTarjeta']}</p>
		</div>
		</div>
		</div>
		`
	}
}
//calculando tarifa segun horario
if(tipo == 'tarifa'){
	// alert("holi");
	let tarifaCalculo = document.getElementById('selectTarifa').value;
	let tarifaCard = document.getElementById('saldoTarjetaBip');
	console.log(document.getElementById('saldoTarjetaBip'));
	tarifaCard = tarifaCard.substring(0,tarifaCard.length)
	console.log(tarifaCard);
	tarifaCalculo = parseInt(tarifaCalculo);
	tarifaCard = parseInt(tarifaCard);
	let saldoFinal = tarifaCard - tarifaCalculo;
	let contSaldoFinal = document.getElementById('contSaldoFinal');
	contSaldoFinal.innerHTML = saldoFinal;
}
}



//conectando a firestore
firebase.initializeApp({
	apiKey: 'AIzaSyBcOCRVlhIyiLBgmBaeblRdW9_Yt0x6ONo',
	authDomain: 'translab-36e8e.firebaseapp.com',
	projectId: 'translab-36e8e'
});
var db = firebase.firestore();

//agregando numero de tarjeta
window.saveCard = () =>{
	let bipNumber = document.getElementById('bipNumber').value;
	db.collection("cardBip").add({
		numberBip: bipNumber
	})
	.then(function(docRef) {
		console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
		console.error("Error adding document: ", error);
	});

	//leyendo numero de tarjeta
	let containerBip = document.getElementById('containerBip');
	db.collection("cardBip").onSnapshot((querySnapshot) => {
		containerBip.innerHTML = '';
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data().numberBip}`);
			containerBip.innerHTML += `
			<div class="row mt-1">
			<div class="col-12">
			<p class="bg-white p-1">${doc.data().numberBip}<button type="button" class="btn btn-info btnCard" onclick="window.deleteCard('${doc.id}')"><i class="fas fa-times text-warning"></i></button></p>
			</div>
			</div>
			`
		});
	});

}
//select de ver saldo
window.showCard = () =>{
	let selectCard = document.getElementById('selectCard');
	db.collection("cardBip").onSnapshot((querySnapshot) => {
		selectCard.innerHTML = '';
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data().numberBip}`);
			selectCard.innerHTML += `
			<option value="${doc.data().numberBip}">${doc.data().numberBip}</option>
			`
		});
	});

}
// //calcular tarifa
// window.calculateRate = () =>{
// 	let selectCardRate = document.getElementById('selectCardRate');
// 	db.collection("cardBip").onSnapshot((querySnapshot) => {
// 		selectCardRate.innerHTML = '';
// 		querySnapshot.forEach((doc) => {
// 			console.log(`${doc.id} => ${doc.data().numberBip}`);
// 			selectCardRate.innerHTML += `
// 			<option value="${doc.data().numberBip}">${doc.data().numberBip}</option>
// 			`
// 		});
// 	});
// }

//borrando numero de tarjeta
window.deleteCard = (idCard) => {
	db.collection("cardBip").doc(idCard).delete().then(function() {
		console.log("Document successfully deleted!");
	}).catch(function(error) {
		console.error("Error removing document: ", error);
	});
}