
const mongoose = require('mongoose');

(async () => {
  try {
    await
      mongoose.connect('mongodb://localhost:27017/Tagarelas', {
        serverSelectionTimeoutMS: 5000, // Timeout de seleção de servidor em milissegundos
        socketTimeoutMS: 45000, // Timeout de socket em milissegundos
      });
    console.log('Conexão ao MongoDB estabelecida com sucesso.');

    // Restante do código que depende da conexão ao banco de dados...

  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
})();

// Definindo o esquema do Participante   
const participanteSchema = new mongoose.Schema({
  sala: { type: String, default: 'Sem Sala' },
  id: { type: Number, default: 0 },
  sequencia: { type: Number, default: 1 },
  nome: { type: String, default: 'Sem Nome' },
  avatar: { type: String, default: 'default_avatar.jpg' },
  entradaNaSala: { type: Number, default: 0 },
  tempoDeFala: { type: Number, default: 0 },
  tempoDeFalaAcumulado: { type: Number, default: 0 },
  populacaoAcumulada: { type: Number, default: 0 },
  percentualAcumuloFala: { type: Number, default: 0 },
  fatorDeLorenz: { type: Number, default: 0 },
});

// Criando o modelo Participante
const ParticipanteModel = mongoose.model('participante', participanteSchema);

// Criando a classe DAO para interagir com o MongoDB
class ParticipanteDAO {

  constructor() {
    // Verifica se o objeto window está definido ou não
    if (typeof global !== 'undefined') {
      console.log('ParticipanteDAO Está no lado do servidor (Node.js).');
    } else {
      console.log('ParticipanteDAO Está no lado do cliente (navegador).');
    }

  }

  // Método para obter todos os alunos de uma sala
async obterAlunosDaSala(sala) {
  try {
    console.log(`ParticipanteDAO.obterRegistrosDaSala -> Obtendo registros da sala: ${sala}`);

    // Procura por todos os participantes na sala especificada
    let registros = await ParticipanteModel.find({ sala: sala });

    console.log(`ParticipanteDAO.obterRegistrosDaSala -> alunos  da sala ${sala} obtidos com sucesso.`);
    return registros;
  } catch (error) {
    console.error(`ParticipanteDAO.obterRegistrosDaSala -> Erro ao obter registros da sala ${sala}:`, error);
  }
}


  // Método para obter a lista de salas de aula
  async obterListaDeSalas() {
    try {
      console.log('ParticipanteDAO.obterListaDeSalas -> Obtendo a lista de salas de aula.');

      // Procura por todas as salas de aula distintas
      let salas = await ParticipanteModel.distinct('sala');

     // console.log('ParticipanteDAO.obterListaDeSalas -> Lista de salas de aula obtida com sucesso:', salas);
      return salas;
    } catch (error) {
      console.error('ParticipanteDAO.obterListaDeSalas -> Erro ao obter a lista de salas de aula:', error);
    }
  }


  // Método para adicionar um participante ou atualizar o tempoDeFala
  async atualizarParticipante(participante) {
    try {
      console.log('#### ParticipanteDAO.atualizarParticipante -> Objeto participante:', participante);

      // Procura por um participante existente com o mesmo id
      let participanteExistente = await ParticipanteModel.findOne({ sala: participante.sala, id: participante.id });

      if (participanteExistente) {
        // Se o participante existir, soma o tempoDeFala ao existente
        participanteExistente.tempoDeFala += participante.tempoDeFala;
        await participanteExistente.save();
        console.log('#### ParticipanteDAO.atualizarParticipante -> Participante atualizado com sucesso.');
      } else {
        // Se o participante não existir, cria um novo
        let novoParticipante = new ParticipanteModel(participante);
        await novoParticipante.save();
        console.log('#### ParticipanteDAO.atualizarParticipante -> Participante adicionado com sucesso.');
      }
    } catch (error) {
      console.error('#### ParticipanteDAO.atualizarParticipante -> Erro ao adicionar ou atualizar participante:', error);
    }
  }


  // Método para adicionar um participante
  async adicionarParticipante(participante) {
    try {
      console.log('ParticipanteDAO.adicionarParticipante -> Objeto participante:', participante);
      let novoParticipante = new ParticipanteModel(participante);
      novoParticipante.save();
      console.log('ParticipanteDAO.adicionarParticipante -> Participante adicionado com sucesso.');
    } catch (error) {
      console.error('ParticipanteDAO.adicionarParticipante -> Erro ao adicionar participante:', error);
    }
  }

  /*
   Insere os dados do participante no ParticipanteDAO
*/
  async insereParticipantesNoBancoDeDados(participantes) {
    //Uso do DAO
    //console.log("#### inserindo participantes #### =>", participantes.length)
    participantes.forEach((participante) => {
      // console.log('#### ParticipanteDAO.insereParticipantesNoBancoDeDados->participante',participante);
      this.atualizarParticipante(participante);
    });
    // Outros métodos CRUD podem ser adicionados conforme necessário
  }
}

module.exports = ParticipanteDAO

