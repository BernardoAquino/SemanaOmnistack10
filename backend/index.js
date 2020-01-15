const express = require('express'); //Importando o express

const app = express(); //Chamando express

app.use(express.json()); //Express entender requições de um corpo com formato JSON

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros: 

// Query Param: req.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.post('/users', (request, response) => { //Função que estabele rota padrão(Request parâmetro que vem do Front-End e Response devolve uma respota para o cliente)
    console.log(request.body);
    return response.json({ message: 'Hello Omnistack'}); //Envia JSON como resposta
});

app.listen(3333); //Definindo localhost com porta padrão