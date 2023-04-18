class Funcionario {
  constructor(i) {
    this.matricula = i.matricula;
    this.nomecompleto = i.nomecompleto;
    this.dataadmissao = i.dataadmissao;
    this.salario = i.salario;
    this.desempenho = i.desempenho;
    this.bonificacao = this.calcBonificacao();
  }

  create() {
    return `INSERT INTO funcionario VALUES(DEFAULT,'${this.nomecompleto}', '${this.dataadmissao}', ${this.salario}, ${this.desempenho},${this.bonificacao})`;
  }

  read() {
    return `SELECT * FROM funcionario`;
  }

  update() {
    return `UPDATE funcionario SET nome_completo='${this.nomecompleto}', data_admissao = '${this.dataadmissao}', salario = '${this.salario}', desempenho = '${this.desempenho}', bonificacao = '${this.bonificacao}' WHERE matricula='${this.matricula}'`;
  }

  del() {
    return `DELETE FROM funcionario WHERE matricula=${this.matricula}`;
  }

  anosTrabalhados() {
    let date1 = new Date(this.dataadmissao);
    let date2 = new Date();

    let diferencaEmMilissegundos = Math.abs(date2.getTime() - date1.getTime());

    let diferencaEmAnos = Math.floor(
      diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000)
    );

    return diferencaEmAnos;
  }

  calcBonificacao() {
    return this.salario * 0.02 * this.anosTrabalhados() * this.desempenho;
  }
}

module.exports = Funcionario;
