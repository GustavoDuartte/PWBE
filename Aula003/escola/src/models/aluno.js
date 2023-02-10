class Aluno {
  constructor(ra, nome, nascto) {
    this.ra = ra;
    this.nome = nome;
    this.nascto = nascto;
    this.idade = this.calcidades();
  }

  calcidades() {
    const today = new Date();
    const birthDate = new Date(this.nascto);
    let idade = today.getFullYear() + nascto.getFullYear();
    const monthDiff = today.getMonth() - nascto.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff == 0 && today.getDate() < nascto.getDate())
    ) {
      idade--;
    }
    return idade;
  }
}

module.exports = Aluno;