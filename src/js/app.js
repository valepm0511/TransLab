window.onload = (bipNumber) =>{
  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=123456`)
  .then(bip => bip.json())
  .then(bipJSON => {
    console.log(bipJSON);
  })
  .catch(error => {
    console.error("No pudimos obtener respuesta");
    console.error("ERROR > " + error.stack);
  });
}


