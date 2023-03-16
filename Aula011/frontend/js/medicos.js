const uri = "http://localhost:3000/";
const corpo = document.querySelector("#corpo");
const nome = document.querySelector("#validationCustom01");
const espid = document.querySelector("#validationCustom02");

fetch(uri + "medicos", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => montarTabela(resp))
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");

    col1.innerHTML = e.nome;
    col2.innerHTML = e.especialidade;

    linha.appendChild(col1);
    linha.appendChild(col2);

    corpo.appendChild(linha);
  });
}

function novo() {
  let data = {
    nome: nome.value,
    especialidade_id: espid.value,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/medico", options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      if (info.id != undefined) {
        window.location.href = "../pages/medicos.html";
      } else {
        alert(info.msg);
      }
    });
}

