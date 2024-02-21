class Participante {
  constructor(sala, id, sequencia, nome, avatar, entradaNaSala, tempoDeFala) {
    this.sala = sala;
    this.id = id;
    this.sequencia = sequencia;
    this.nome = nome;
    this.avatar = avatar;
    this.entradaNaSala = entradaNaSala;
    this.tempoDeFala = tempoDeFala;
    this.tempoDeFalaAcumulado = 0;
    this.populacaoAcumulada = 0;
    this.percentualAcumuloFala = 0;
    this.fatorDeLorenz = 0;
    return this
  }
}
 module.exports=Participante