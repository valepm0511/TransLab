//conectando a la api de bip
window.getInfoBip = () =>{
	let bipNumber = document.getElementById('bipNumber').value;
	document.getElementById('bipNumber').value = '';
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
}

// recorriendo api bip y mostrando en pantalla
let containerApiBip = document.getElementById('containerApiBip');
const bipOk = (bipJSON) => {
	// console.log(bipJSON);
	containerApiBip.innerHTML = '';
	for(let i in bipJSON){
		console.log(bipJSON[i]);
		containerApiBip.innerHTML = `
		<p>Numero tarjeta: ${bipJSON['id']}</p>
		<p>Estado contrato: ${bipJSON['estadoContrato']}</p>
		<p>Saldo: ${bipJSON['saldoTarjeta']}</p>
		<p>Fecha de saldo tarjeta: ${bipJSON['fechaSaldo']}</p>
		`
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
}

//leyendo numero de tarjeta
let containerBip = document.getElementById('containerBip');
db.collection("cardBip").onSnapshot((querySnapshot) => {
	containerBip.innerHTML = '';
	querySnapshot.forEach((doc) => {
		console.log(`${doc.id} => ${doc.data().numberBip}`);
		containerBip.innerHTML += `
		<p class="">${doc.data().numberBip}</p>
		<button onclick="window.deleteCard('${doc.id}')">borrar</button>
		`
	});
});

//borrando numero de tarjeta
window.deleteCard = (idCard) => {
	db.collection("cardBip").doc(idCard).delete().then(function() {
		console.log("Document successfully deleted!");
	}).catch(function(error) {
		console.error("Error removing document: ", error);
	});
}
