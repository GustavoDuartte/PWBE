const registerNome = document.querySelector("#registerNome");
const registerData = document.querySelector("#registerData");
const registerSal = document.querySelector("#registerSal");
const registerNota = document.querySelector("#registerNota");

function registrar() {
  let data = {
    nomecompleto: registerNome.value,
    dataadmissao: registerData.value,
    salario: registerSal.value,
    desempenho: registerNota.value,
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
      } else {
        alert(info.msg);
      }
    });
}
