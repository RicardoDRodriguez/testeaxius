
//import ApiLinks  from './ApiLinks';

const Participante = require("./Participante")

// Instanciar ParticipanteDAO
const ParticipanteDAO = require('./ParticipanteDAO')
const participanteDAO = new ParticipanteDAO();


class DataBase {

  static participantes = [
    //sala,id, sequencia, nome, avatar, entradaNaSala, tempoDeFala
    /*
     new Participante("Sem Interatividade",1, 1, "Pimentel", "avatar", 10, 4928),
     new Participante("Sem Interatividade",2, 1, "Amanda", "avatar", 10, 278),
     new Participante("Sem Interatividade",3, 1, "Sabrina", "avatar", 10, 267),
     new Participante("Sem Interatividade",4, 1, "Isa", "avatar", 10, 252),
     new Participante("Sem Interatividade",5, 1, "Patricia", "avatar", 10, 160),
     new Participante("Sem Interatividade",6, 1, "ElianeG", "avatar", 10, 88),
     new Participante("Sem Interatividade",7, 1, "Ana", "avatar", 10, 42),
     new Participante("Sem Interatividade",8, 1, "Ricardo", "avatar", 10, 21),
     new Participante("Sem Interatividade",9, 1, "Mariana", "avatar", 10, 12),
     new Participante("Sem Interatividade",10, 1, "Paulo", "avatar", 10, 6),
     new Participante("Sem Interatividade",11, 1, "Alice", "avatar", 10, 0),
     new Participante("Sem Interatividade",12, 1, "Andreia", "avatar", 10, 0),
     new Participante("Sem Interatividade",13, 1, "ElianeR", "avatar", 10, 0),
     new Participante("Sem Interatividade",14, 1, "Felipe", "avatar", 10, 0),
     new Participante("Sem Interatividade",15, 1, "Isis", "avatar", 10, 0),
     new Participante("Sem Interatividade",16, 1, "Jones", "avatar", 10, 0),
     new Participante("Sem Interatividade",17, 1, "Monica", "avatar", 10, 0),
     new Participante("Sem Interatividade",18, 1, "Monique", "avatar", 10, 0),
     new Participante("Sem Interatividade",19, 1, "Rodrigo", "avatar", 10, 0),
     new Participante("Sem Interatividade",20, 1, "Silvia", "avatar", 10, 0) 
    */
    /*
     new Participante("Total Interatividade",1, 1, "Pimentel", "avatar", 10, 300),
     new Participante("Total Interatividade",2, 1, "Amanda", "avatar", 10, 300),
     new Participante("Total Interatividade",3, 1, "Sabrina", "avatar", 10, 300),
     new Participante("Total Interatividade",4, 1, "Isa", "avatar", 10, 300),
     new Participante("Total Interatividade",5, 1, "Patricia", "avatar", 10, 300),
     new Participante("Total Interatividade",6, 1, "ElianeG", "avatar", 10, 300),
     new Participante("Total Interatividade",7, 1, "Ana", "avatar", 10, 300),
     new Participante("Total Interatividade",8, 1, "Ricardo", "avatar", 10, 300),
     new Participante("Total Interatividade",9, 1, "Mariana", "avatar", 10, 300),
     new Participante("Total Interatividade",10, 1, "Paulo", "avatar", 10, 300),
     new Participante("Total Interatividade",11, 1, "Alice", "avatar", 10, 300),
     new Participante("Total Interatividade",12, 1, "Andreia", "avatar", 10, 300),
     new Participante("Total Interatividade",13, 1, "ElianeR", "avatar", 10, 300),
     new Participante("Total Interatividade",14, 1, "Felipe", "avatar", 10, 300),
     new Participante("Total Interatividade",15, 1, "Isis", "avatar", 10, 300),
     new Participante("Total Interatividade",16, 1, "Jones", "avatar", 10, 300),
     new Participante("Total Interatividade",17, 1, "Monica", "avatar", 10, 300),
     new Participante("Total Interatividade",18, 1, "Monique", "avatar", 10, 300),
     new Participante("Total Interatividade",19, 1, "Rodrigo", "avatar", 10, 300),
     new Participante("Total Interatividade",20, 1, "Silvia", "avatar", 10, 300)
    */

    
    new Participante("Media Interatividade", 1, 1, "Pimentel", "avatar", 10, 2757),
    new Participante("Media Interatividade", 2, 1, "Amanda", "avatar", 10, 1225),
    new Participante("Media Interatividade", 3, 1, "Sabrina", "avatar", 10, 513),
    new Participante("Media Interatividade", 4, 1, "Isa", "avatar", 10, 458),
    new Participante("Media Interatividade", 5, 1, "Patricia", "avatar", 10, 428),
    new Participante("Media Interatividade", 6, 1, "ElianeG", "avatar", 10, 264),
    new Participante("Media Interatividade", 7, 1, "Ana", "avatar", 10, 260),
    new Participante("Media Interatividade", 8, 1, "Ricardo", "avatar", 10, 258),
    new Participante("Media Interatividade", 9, 1, "Mariana", "avatar", 10, 251),
    new Participante("Media Interatividade", 10, 1, "Paulo", "avatar", 10, 222),
    new Participante("Media Interatividade", 11, 1, "Alice", "avatar", 10, 198),
    new Participante("Media Interatividade", 12, 1, "Andreia", "avatar", 10, 168),
    new Participante("Media Interatividade", 13, 1, "ElianeR", "avatar", 10, 102),
    new Participante("Media Interatividade", 14, 1, "Felipe", "avatar", 10, 60),
    new Participante("Media Interatividade", 15, 1, "Isis", "avatar", 10, 43),
    new Participante("Media Interatividade", 16, 1, "Jones", "avatar", 10, 21),
    //new Participante("Media Interatividade",17, 1, "Monica", "avatar", 10, 300),
    //new Participante("Media Interatividade",18, 1, "Monique", "avatar", 10, 300),
    //new Participante("Media Interatividade",19, 1, "Rodrigo", "avatar", 10, 300),
    //new Participante("Media Interatividade",20, 1, "Silvia", "avatar", 10, 300)
    
  ]


  constructor() {

    // Verifica se o objeto window está definido ou não
    if (typeof window === 'undefined') {
      // Se for undefined, está rodando no lado servidor
      console.log('**** Database Está rodando no lado servidor ****');
    } else {
      // Se não for undefined, está rodando no lado cliente
      console.log('* Database Está rodando no lado cliente *');
    }

  }

  async percorrerParticipantes() {
    console.log("Percorrendo todos os participantes:");
    DataBase.participantes.forEach((participante) => {
      console.log(participante);
    });
  };
  // Retorna os participantes ordenados
  async getParticipantes() {
    const participantesFinal = DataBase.participantes.slice().sort((a, b) => b.tempoDeFala - a.tempoDeFala);
    const totalTempoDeFalaEmMinutos = DataBase.participantes.reduce(
      (total, participante) => total + parseInt(participante.tempoDeFala),0);
      let index = 0
      participantesFinal.forEach((participante) => {
          participantesFinal[index].percentualAcumuloFala =
            ((participantesFinal[index].tempoDeFala / totalTempoDeFalaEmMinutos) * 100);
        ++index;
      })
    return (participantesFinal);
  }

  async calcularGini() {

    const math = require('mathjs');

    console.log("Colecao de participantes: ", DataBase.participantes);
    const participantesOrdenados = DataBase.participantes.slice().sort((a, b) => b.tempoDeFala - a.tempoDeFala);

    let fatorPercentual = 0
    let acumulaPercentual = 0
    let tempoDeFalaAcumulado = 0

    if (participantesOrdenados.length > 0) {
      fatorPercentual = 100 / participantesOrdenados.length
    }

    /*
      Calcula a soma acumulativa dos tempos de fala dos participantes
    */
    const ocupantesDaSala = DataBase.participantes.length
    const somaAcumulativa = participantesOrdenados.reduce((soma, participante) => {
      soma += participante.tempoDeFala;
      return soma;
    }, 0);
    console.log("Soma dos tempos:", somaAcumulativa)
    console.log("Ocupantes da Sala:", ocupantesDaSala)


    const aTempoFala = []
    const aFatorPercentual = []
    const participantesOrdenadosCompleto = []
    var populacaoAcumuladaAnterior = 0
    var percentualAcumuloFalaAnterior = 0
    var privez = true
    var fatorDeLorenzAcumulado = 0

    participantesOrdenados.forEach((participante) => {
      // Carrega vetor de tempo de fala
      aTempoFala.push(participante.tempoDeFala)

      // Carrega Vetor de fator percentual
      acumulaPercentual += fatorPercentual
      aFatorPercentual.push(acumulaPercentual)

      // Calcula tempo de Fala Acumulado
      tempoDeFalaAcumulado += participante.tempoDeFala

      // Atualiza percentual acumulado 
      participante.populacaoAcumulada = acumulaPercentual

      // Atualiza tempo de fala acumulado
      participante.tempoDeFalaAcumulado = tempoDeFalaAcumulado
      participante.percentualAcumuloFala = (tempoDeFalaAcumulado / somaAcumulativa) * 100

      // Calcula o fator de Lorens

      if (!privez) {
        /*
          Os valores apresentados são percentuais, por isso a divisão por 100
        */
        var fatorDeLorenz = (((populacaoAcumuladaAnterior / 100 + acumulaPercentual / 100) *
          (participante.percentualAcumuloFala / 100 - percentualAcumuloFalaAnterior / 100)) * 0.5);
        participante.fatorDeLorenz = fatorDeLorenz;
        fatorDeLorenzAcumulado += fatorDeLorenz
        /**
         console.log ("População acumulada anterior:", populacaoAcumuladaAnterior)
         console.log ("População acumulada:", acumulaPercentual)
         console.log ("percentual acumula fala:", participante.percentualAcumuloFala)
         console.log ("Percentual acumula anterior", percentualAcumuloFalaAnterior)
         console.log ("Fator de Lorenz", fatorDeLorenz)
         */

      }
      // Guarda vetor em participantesOrdenadosCompleto
      participantesOrdenadosCompleto.push(participante);

      populacaoAcumuladaAnterior = participante.populacaoAcumulada
      percentualAcumuloFalaAnterior = participante.percentualAcumuloFala

      privez = false
      // Calcula a curva de Lorens


    }) // forEach de participantes ordenados;
 
    console.log("Tempo de fala ordenado:", aTempoFala)
    console.log("Participantes Ordenados Com populacaoAcumulada", participantesOrdenadosCompleto)

    const variance = math.variance(aTempoFala);
    const stdDeviation = math.std(aTempoFala);

    console.log('Variância:', variance);
    console.log('Desvio Padrão:', stdDeviation);


    /*
      Calcula a media dos tempos de fala dos participantes
    */

    const mediaPartic = this.calcularMediaTempoDeFala();
    console.log("Media dos Participantes", mediaPartic)

    /*
       Calcula o coeficiente de variação dos tempos da sala
    */
    const coeficienteDeVariacao = (mediaPartic, stdDeviation) => {
      if (mediaPartic > 0) {
        return (stdDeviation / mediaPartic)
      } else {
        return (0)
      }

    }


    const coefVariacao = coeficienteDeVariacao(mediaPartic, stdDeviation);
    console.log("Coeficiente de Variacao:", coefVariacao)

    console.log(">>>>>> insere Participantes dados no banco de dados")
    await participanteDAO.insereParticipantesNoBancoDeDados(participantesOrdenadosCompleto)
    console.log(">>>>>> Participantes inseridos com sucesso")

    // Calcula o índice de Gini
    const giniIndex = 1 - (1 - (2 * fatorDeLorenzAcumulado))
    console.log('Índice de Gini:', giniIndex);
    return giniIndex;
  };



  async calcularMediaTempoDeFala() {
    if (DataBase.participantes.length === 0) {
      console.log("Não encontrei participantes para calcular a média")
      return 0;
    }

    const totalTempoDeFalaEmMinutos = DataBase.participantes.reduce(
      (total, participante) => total + parseInt(participante.tempoDeFala),
      0
    );
    return totalTempoDeFalaEmMinutos / DataBase.participantes.length;
  };

};

module.exports = DataBase;