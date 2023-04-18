const url = "http://localhost:5000";
const corpo = document.querySelector("#corpo");
const modal = document.querySelector(".modal-corpo");
const nomeRest = document.querySelector(".modal-title");
let query = document.querySelector("#query");

fetch("http://localhost:5000/read", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => {
    montarTabela(resp);
  })
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col4 = document.createElement("td");
    let button = document.createElement("button");

    col1.innerHTML = e.nome_completo;
    col2.innerHTML = e.desempenho;
    button.innerHTML = "info";

    button.setAttribute("type", "button");
    button.setAttribute("data-mdb-toggle", "modal");
    button.setAttribute("data-mdb-target", "#myModal");
    button.setAttribute("onclick", `getNomeRest('${e.nome_completo}')`);

    button.className = "btn btn-primary";

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col4);
    col4.appendChild(button);

    corpo.appendChild(linha);
  });
}

function getNomeRest(nome_completo) {
  fetch("http://localhost:5000/readnome?nome_completo=" + nome_completo, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((resp) => {
      modal.innerHTML = "";
      getRestInfo(resp);
    })
    .catch((err) => console.error(err));
}

function getRestInfo(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("ul");
    let col1 = document.createElement("li");
    let col2 = document.createElement("li");
    let col3 = document.createElement("li");
    let col4 = document.createElement("li");
    let col5 = document.createElement("li");

    col1.innerHTML = e.nome_completo;
    col2.innerHTML = formatarData(e.data_admissao);
    col3.innerHTML = formatarMoeda(e.salario);
    col4.innerHTML = e.desempenho;
    col5.innerHTML = formatarMoeda(e.bonificacao);

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);
    linha.appendChild(col4);
    linha.appendChild(col5);

    nomeRest.innerHTML = e.nome_completo;

    modal.appendChild(linha);
  });
}

function formatarData(dataava) {
  return new Date(dataava).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatarMoeda(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}
