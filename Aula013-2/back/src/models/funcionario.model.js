class Funcionario {
  constructor(i) {
    this.matricula = i.matricula;
    this.nome_completo = i.nome_completo;
    this.data_admissao = i.data_admissao;
    this.salario = i.salario;
    this.data_pagto = i.data_pagto;
    this.desempenho = i.desempenho;
    this.bonificacao = this.caclBonificacao;
  }

  create() {
    return `INSERT INTO funcionario VALUES(null,'${this.nome_completo}', '${this.data_admissao}', '${this.salario}', '${this.data_pagto}', '${this.desempenho}', ${this.bonificacao})`;
  }

  read() {
    return `SELECT * FROM funcionario`;
  }

  update() {
    return `UPDATE funcionario SET nome_completo='${this.nome_completo}', data_admissao = '${this.data_admissao}', salario = '${this.salario}', data_pagto = '${this.data_pagto}', desempenho = '${this.desempenho}', bonificacao = '${this.bonificacao}' WHERE matricula='${this.matricula}'`;
  }

  del() {
    return `DELETE FROM funcionario WHERE matricula=${this.matricula}`;
  }

  caclBonificacao() {
    let date = new Date();

    let ano = date.getFullYear();
    let mes = date.getMonth() + 1;

    let data_admiss = this.data_admissao.split("-");

    let anosdiff = ano - data_admiss[0];

    function conta() {
      if (data_admiss[1] > mes) {
        anosdiff--;
        return anosdiff;
      } else if (data_admiss[1] < mes) {
        return anosdiff;
      }
    }
    return conta();
  }
}

module.exports = Funcionario;
