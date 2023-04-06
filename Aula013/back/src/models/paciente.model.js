class Paciente {
  constructor(i) {
    this.id = i.id;
    this.nome_completo = i.nome_completo;
    this.nascimento = i.nascimento;
    this.peso = i.peso;
    this.altura = i.altura;
    this.idade = this.calcIdade();
    this.imc = this.calcIMC();
    this.diagnostico = this.calcDiagnostico();
  }

  create() {
    return `INSERT INTO paciente VALUES(null,'${this.nome_completo}', '${this.nascimento}', ${this.peso}, ${this.altura}, ${this.idade}, ${this.imc}, '${this.diagnostico}')`;
  }

  read() {
    return `SELECT * FROM paciente`;
  }

  update() {
    return `UPDATE paciente SET nome_completo='${this.nome_completo}', nascimento = '${this.nascimento}', peso = '${this.peso}', altura = '${this.altura}', idade = '${this.idade}', imc = '${this.imc}', diagnostico = '${this.diagnostico}' WHERE id='${this.id}'`;
  }

  del() {
    return `DELETE FROM paciente WHERE id=${this.id}`;
  }

  calcIdade() {
    const today = new Date();
    const nascimento = new Date(this.nascimento);

    let idade = today.getFullYear() - nascimento.getFullYear();
    const monthDiff = today.getMonth() - nascimento.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff == 0 && today.getDate() < nascimento.getDate())
    ) {
      idade--;
    }

    return idade;
  }

  calcIMC() {
    let imc = this.peso / (this.altura * this.altura);
    return imc.toFixed(2);
  }

  calcDiagnostico() {
    if (this.imc < 18.5) {
      return "Abaixo do peso";
    } else if (this.imc < 25) {
      return "Peso normal";
    } else if (this.imc < 30) {
      return "Sobrepeso";
    } else if (this.imc < 35) {
      return "Obesidade grau 1";
    } else if (this.imc < 40) {
      return "Obesidade grau 2";
    } else {
      return "Obesidade grau 3";
    }
  }
}

module.exports = Paciente;
