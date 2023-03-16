const uri = "http://localhost:3000/";
const corpo = document.querySelector("#corpo");
// Cadastrar
const dat = document.querySelector("#validationCustom01");
const medicid = document.querySelector("#validationCustom02");
const pacid = document.querySelector("#validationCustom03");
//Editar
const atendi = document.querySelector("#editCustom01");
const editdat = document.querySelector("#editCustom02");

fetch(uri + "atendimentos", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => montarTabela(resp))
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");

    let del = document.createElement("button");
    del.innerHTML = "<i class='fas fa-trash'></i>";
    del.setAttribute("onclick", `excluirItem('${e.id}')`);

    del.className = "btn-delete";

    col1.innerHTML = formatarData(e.data);
    col2.innerHTML = e.medico_nome;
    col3.innerHTML = e.paciente_nome;
    col4.appendChild(del);

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);
    linha.appendChild(col4);

    corpo.appendChild(linha);
  });
}

function formatarData(data) {
  return new Date(data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function novo() {
  let data = {
    data: dat.value,
    medico_id: medicid.value,
    paciente_id: pacid.value,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/atendimento", options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      if (info.id != undefined) {
        window.location.href = "../pages/atendimentos.html";
      } else {
        alert(info.msg);
      }
    });
}

function alterar() {
  let id = atendi.value;

  let batata = {
    data: editdat.value,
  };

  let options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(batata),
  };

  fetch("http://localhost:3000/atendimento/" + id, options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      if (info.id != undefined) {
        window.location.href = "../pages/atendimentos.html";
      } else {
        alert(info.msg);
      }
    });
}
function excluirItem(i) {
  if (confirm("Você deseja EXCLUIR este atendimento?"))
    fetch("http://localhost:3000/atendimento/" + i, { method: "DELETE" })
      .then((resp) => resp.status)
      .then((resp) => {
        if (resp == 204) window.location.reload();
        else alert("Erro ao enviar dados");
      });
}
