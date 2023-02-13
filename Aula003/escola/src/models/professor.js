class Professor {
  constructor(id, nome, nascto, profissao) {
    this.id = id;
    this.nome = nome;
    this.nascto = nascto;
    this.profissao = profissao;
    this.idade = this.calcidade();
  }

  calcidade() {
    const today = new Date();
    const nascto = new Date(this.nascto);
    let idade = today.getFullYear() - nascto.getFullYear();
    const monthDiff = today.getMonth() - nascto.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < nascto.getDate())
    ) {
      idade--;
    }
    return idade;
  }
}

module.exports = Professor;
