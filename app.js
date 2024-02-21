// app.js

const http = require('http')
const axios = require('axios');

const Participante = require("./Participante")
const ParticipanteDAO = require('./ParticipanteDAO')

const participantes = [
    //sala,id, sequencia, nome, avatar, entradaNaSala, tempoDeFala

    new Participante("Sem Interatividade", 1, 1, "Pimentel", "avatar", 10, 4928),
    new Participante("Sem Interatividade", 2, 1, "Amanda", "avatar", 10, 278),
    new Participante("Sem Interatividade", 3, 1, "Sabrina", "avatar", 10, 267),
    new Participante("Sem Interatividade", 4, 1, "Isa", "avatar", 10, 252),
    new Participante("Sem Interatividade", 5, 1, "Patricia", "avatar", 10, 160),
    new Participante("Sem Interatividade", 6, 1, "ElianeG", "avatar", 10, 88),
    new Participante("Sem Interatividade", 7, 1, "Ana", "avatar", 10, 42),
    new Participante("Sem Interatividade", 8, 1, "Ricardo", "avatar", 10, 21),
    new Participante("Sem Interatividade", 9, 1, "Mariana", "avatar", 10, 12),
    new Participante("Sem Interatividade", 10, 1, "Paulo", "avatar", 10, 6),
    new Participante("Sem Interatividade", 11, 1, "Alice", "avatar", 10, 0),
    new Participante("Sem Interatividade", 12, 1, "Andreia", "avatar", 10, 0),
    new Participante("Sem Interatividade", 13, 1, "ElianeR", "avatar", 10, 0),
    new Participante("Sem Interatividade", 14, 1, "Felipe", "avatar", 10, 0),
    new Participante("Sem Interatividade", 15, 1, "Isis", "avatar", 10, 0),
    new Participante("Sem Interatividade", 16, 1, "Jones", "avatar", 10, 0),
    new Participante("Sem Interatividade", 17, 1, "Monica", "avatar", 10, 0),
    new Participante("Sem Interatividade", 18, 1, "Monique", "avatar", 10, 0),
    new Participante("Sem Interatividade", 19, 1, "Rodrigo", "avatar", 10, 0),
    new Participante("Sem Interatividade", 20, 1, "Silvia", "avatar", 10, 0),

    new Participante("Total Interatividade", 1, 1, "Pimentel", "avatar", 10, 300),
    new Participante("Total Interatividade", 2, 1, "Amanda", "avatar", 10, 300),
    new Participante("Total Interatividade", 3, 1, "Sabrina", "avatar", 10, 300),
    new Participante("Total Interatividade", 4, 1, "Isa", "avatar", 10, 300),
    new Participante("Total Interatividade", 5, 1, "Patricia", "avatar", 10, 300),
    new Participante("Total Interatividade", 6, 1, "ElianeG", "avatar", 10, 300),
    new Participante("Total Interatividade", 7, 1, "Ana", "avatar", 10, 300),
    new Participante("Total Interatividade", 8, 1, "Ricardo", "avatar", 10, 300),
    new Participante("Total Interatividade", 9, 1, "Mariana", "avatar", 10, 300),
    new Participante("Total Interatividade", 10, 1, "Paulo", "avatar", 10, 300),
    new Participante("Total Interatividade", 11, 1, "Alice", "avatar", 10, 300),
    new Participante("Total Interatividade", 12, 1, "Andreia", "avatar", 10, 300),
    new Participante("Total Interatividade", 13, 1, "ElianeR", "avatar", 10, 300),
    new Participante("Total Interatividade", 14, 1, "Felipe", "avatar", 10, 300),
    new Participante("Total Interatividade", 15, 1, "Isis", "avatar", 10, 300),
    new Participante("Total Interatividade", 16, 1, "Jones", "avatar", 10, 300),
    new Participante("Total Interatividade", 17, 1, "Monica", "avatar", 10, 300),
    new Participante("Total Interatividade", 18, 1, "Monique", "avatar", 10, 300),
    new Participante("Total Interatividade", 19, 1, "Rodrigo", "avatar", 10, 300),
    new Participante("Total Interatividade", 20, 1, "Silvia", "avatar", 10, 300),
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

class MinhaClasse {
    meuMetodo() {
        if (typeof global !== 'undefined') {
            console.log('MinhaClasse.meuMetodo está no lado do servidor (Node.js).');
        } else {
            console.log('MinhaClasse.meuMetodo está no lado do cliente (navegador).');
        }
        return new Promise(resolve => {
            // participanteDAO = new ParticipanteDAO()
            console.log("#### inserindo participantes #### =>", participantes.length)
            participantes.forEach((participante) => {
                console.log('#### ParticipanteDAO.InsereParticipante', participante);
                // participanteDAO.adicionarParticipante(participante);
            });

            console.log('MinhaClasse.,euMetodo chamado e concluido!');
            resolve();
        });
    }
}


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!\n');
});

const PORT = 6000;

server.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
    let minhaInstancia = new MinhaClasse();
    minhaInstancia.meuMetodo()
        .then(() => {
            // Continua o código aqui, por exemplo, fazendo a chamada Axios
            console.log(`Executando minhaInstancia.meuMetodo`);
            participanteDAO = new ParticipanteDAO()
            console.log("#### inserindo participantes #### =>", participantes.length)
            participantes.forEach((participante) => {
                //console.log('#### ParticipanteDAO.InsereParticipante', participante);
                participanteDAO.atualizarParticipante(participante);
            });
            console.log('### Lendo lista de salas')
            return participanteDAO.obterListaDeSalas();
        })
        .then(salas =>{
            console.log ('===>>Lista de salas de aula obtidas no database:', salas)
            // Aqui você pode usar a lista de salas em sua chamada de API ou em qualquer outra parte do seu código
            // Por exemplo, você pode passar a lista de salas para sua chamada de API
            return axios.get('http://localhost:6000/rota', { params: { salas: salas } });  
        })
        .then(response => {
            console.log('Resposta da API:', response.data);
        })
        .catch(error => {
            // Lida com os erros
            console.error('Erro:', error);
        });
});
