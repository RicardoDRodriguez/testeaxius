// app.js


const http = require('http')
const axios = require('axios');

const Participante = require("./Participante")
const ParticipanteDAO = require('./ParticipanteDAO')

const participantes = [
    //sala,id, sequencia, nome, avatar, entradaNaSala, tempoDeFala

    new Participante("Aula 1 Turma 3: Apresentação dialogada", 1, 1, "Professor", "avatar", 10, 3006),
    new Participante("Aula 1 Turma 3: Apresentação dialogada", 2, 1, "Sara"     , "avatar", 10, 24),
    new Participante("Aula 1 Turma 3: Apresentação dialogada", 3, 1, "Elisa G"  , "avatar", 10, 12),
    new Participante("Aula 1 Turma 3: Apresentação dialogada", 4, 1, "Marcela"  , "avatar", 10, 2),
    new Participante("Aula 1 Turma 3: Apresentação dialogada", 5, 1, "Aline"    , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada", 6, 1, "Amora"    , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada", 7, 1, "Anita"    , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada", 8, 1, "Andresa"  , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada", 9, 1, "Elisa R." , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada",10, 1, "Fernando" , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada",11, 1, "Isolda"   , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada",12, 1, "Marcos"   , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada",13, 1, "Maria"    , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada",14, 1, "Nicoly"   , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada",15, 1, "Paula"    , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada",16, 1, "Pedro"    , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada",17, 1, "Roberto"  , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentação dialogada",18, 1, "Samanta"  , "avatar", 10, 0),

    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma", 1, 1, "Professor", "avatar", 10, 1362),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma", 2, 1, "Elisa G"  , "avatar", 10, 348),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma", 3, 1, "Elisa R"  , "avatar", 10, 216),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma", 4, 1, "Andresa"  , "avatar", 10, 204),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma", 5, 1, "Pedro"    , "avatar", 10, 192),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma", 6, 1, "Roberto"  , "avatar", 10, 186),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma", 7, 1, "Paula"    , "avatar", 10, 174),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma", 8, 1, "Nicoly"   , "avatar", 10, 150),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma", 9, 1, "Amora"    , "avatar", 10, 138),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma",10, 1, "Marcela"  , "avatar", 10, 126),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma",11, 1, "Anita"    , "avatar", 10, 84),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma",12, 1, "Isolda"   , "avatar", 10, 72),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma",13, 1, "Fernando" , "avatar", 10, 66),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma",14, 1, "Sara"     , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma",15, 1, "Aline"    , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma",16, 1, "Marcos"   , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma",17, 1, "Maria"    , "avatar", 10, 0),
    new Participante("Aula 1 Turma 3: Apresentando-se para a Turma",18, 1, "Samanta"  , "avatar", 10, 0),
  
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    , 1, 1, "Professor", "avatar", 10, 852),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    , 2, 1, "Reinaldo" , "avatar", 10, 276),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    , 3, 1, "Ivana"    , "avatar", 10, 192),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    , 4, 1, "Sara"     , "avatar", 10, 150),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    , 5, 1, "Marieta"  , "avatar", 10, 102),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    , 6, 1, "João"     , "avatar", 10, 102),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    , 7, 1, "Aline"    , "avatar", 10, 60),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    , 8, 1, "Amora"    , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    , 9, 1, "Anita"    , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    ,10, 1, "Andresa"  , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    ,11, 1, "Elisa G"  , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    ,12, 1, "Elisa R"  , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    ,13, 1, "Fernando" , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    ,14, 1, "Isolda"   , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    ,15, 1, "Marcela"  , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    ,16, 1, "Maria"    , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    ,17, 1, "Paula"    , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    ,18, 1, "Pedro"    , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    ,18, 1, "Roberto"  , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentando-se (conversação em fila)"    ,18, 1, "Samanta"  , "avatar", 10, 0),
      
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    , 1, 1, "Professor", "avatar", 10, 4926),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    , 2, 1, "Amora"    , "avatar", 10, 276),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    , 3, 1, "Samanta"  , "avatar", 10, 270),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    , 4, 1, "Ivana"    , "avatar", 10, 252),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    , 5, 1, "Paula"    , "avatar", 10, 162),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    , 6, 1, "Elisa G." , "avatar", 10, 90),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    , 7, 1, "Anita"    , "avatar", 10, 42),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    , 8, 1, "Reinaldo" , "avatar", 10, 18),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    , 9, 1, "Marcela"  , "avatar", 10, 12),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    ,10, 1, "Pedro"    , "avatar", 10, 6),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    ,11, 1, "Aline"    , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    ,12, 1, "Andresa"  , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    ,13, 1, "Elisa R." , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    ,14, 1, "Fernando" , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    ,15, 1, "Isolda"   , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    ,16, 1, "João"     , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    ,17, 1, "Maria"    , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    ,18, 1, "Marieta"  , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    ,18, 1, "Roberto"  , "avatar", 10, 0),
    new Participante("Aula 2 Turma 3: Apresentação dialogada (focada no professor)"    ,18, 1, "Sara"     , "avatar", 10, 0),
   
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa", 1, 1, "Professor"  , "avatar", 10, 2760),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    , 2, 1, "Elisa"      , "avatar", 10, 1224),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    , 3, 1, "Débora"     , "avatar", 10, 516),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    , 4, 1, "Jessica N." , "avatar", 10, 456),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    , 5, 1, "Rosana"     , "avatar", 10, 426),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    , 6, 1, "Carlos"     , "avatar", 10, 264),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    , 7, 1, "Afrânio"    , "avatar", 10, 258),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    , 8, 1, "Ronaldo"    , "avatar", 10, 258),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    , 9, 1, "Luciano"    , "avatar", 10, 252),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    ,10, 1, "Jéssica P." , "avatar", 10, 222),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    ,11, 1, "Renata S."  , "avatar", 10, 198),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    ,12, 1, "Renata B."  , "avatar", 10, 168),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    ,13, 1, "Soraia"     , "avatar", 10, 102),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    ,14, 1, "Marcelo"    , "avatar", 10, 60),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    ,15, 1, "Anderson"   , "avatar", 10, 42),
    new Participante("Aula 9 Turma 3: Conversa centrada no Professor e Elisa"    ,16, 1, "Daiana"     , "avatar", 10, 18),
   
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    , 1, 1, "Professor"   , "avatar", 10, 828),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    , 2, 1, "Leonardo A." , "avatar", 10, 510),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    , 3, 1, "Angela"      , "avatar", 10, 456),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    , 4, 1, "Manuela"     , "avatar", 10, 228),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    , 5, 1, "Ronaldo"     , "avatar", 10, 192),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    , 6, 1, "Silvio"      , "avatar", 10, 192),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    , 7, 1, "Bianca"      , "avatar", 10, 108),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    , 8, 1, "Patricia"    , "avatar", 10, 18),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    , 9, 1, "Andreia"     , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    ,10, 1, "Arnaldo"     , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    ,11, 1, "Carolina"    , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    ,12, 1, "Deise"       , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    ,13, 1, "Davi"        , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    ,14, 1, "Jorge"       , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    ,15, 1, "Leonardo G." , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Conversação Livre (Atividade post-it)"    ,16, 1, "Mario"     , "avatar", 10, 0),
  

  
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    , 1, 1, "Professor"   , "avatar", 10, 4014),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    , 2, 1, "Manuela"     , "avatar", 10, 444),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    , 3, 1, "Angela"      , "avatar", 10, 348),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    , 4, 1, "Andreia"     , "avatar", 10, 336),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    , 5, 1, "Leonardo A." , "avatar", 10, 222),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    , 6, 1, "Carolina"    , "avatar", 10, 216),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    , 7, 1, "Mario"       , "avatar", 10, 12),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    , 8, 1, "Silvio"      , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    , 9, 1, "Arnaldo"     , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    ,10, 1, "Bianca"      , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    ,11, 1, "Deise"       , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    ,12, 1, "Davi"        , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    ,13, 1, "Jorge"       , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    ,14, 1, "Leonardo G." , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    ,15, 1, "Patricia"    , "avatar", 10, 0),
    new Participante("Aula 7 Turma 2: Aula dialogada - Tecnologias Digitais"    ,16, 1, "Ronaldo"     , "avatar", 10, 0),
  

    
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
     new Participante("Sem Interatividade",20, 1, "Silvia", "avatar", 10, 0), 
    

    
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
     new Participante("Total Interatividade",20, 1, "Silvia", "avatar", 10, 300),
    

   
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
