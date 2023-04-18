const registerNome = document.querySelector("#registerNome");
const registerData = document.querySelector("#registerData");
const registerPeso = document.querySelector("#registerPeso");
const registerAltura = document.querySelector("#registerAltura");

function registrar() {
  let data = {
    nome_completo: registerNome.value,
    nascimento: registerData.value,
    peso: registerPeso.value,
    altura: registerAltura.value,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:5000/create", options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      if (info != undefined) {
        window.location.href = "../pages/index.html";
      } else {
        alert(info.msg);
      }
    });
}
