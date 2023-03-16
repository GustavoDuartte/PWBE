const uri = "http://localhost:3000/";
const corpo = document.querySelector("#corpo");
const nome = document.querySelector("#validationCustom01");

fetch(uri + "especialidades", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => montarTabela(resp))
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");

    col1.innerHTML = e.id;
    col2.innerHTML = e.nome;

    linha.appendChild(col1);
    linha.appendChild(col2);

    corpo.appendChild(linha);
  });
}

function novo() {
  let data = {
    nome: nome.value,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/especialidade", options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      if (info.id != undefined) {
        window.location.href = "../pages/especialidades.html";
      } else {
        alert(info.msg);
      }
    });
}
