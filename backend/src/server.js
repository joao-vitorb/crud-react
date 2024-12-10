// Importação de dependências
const express = require("express"); // Criação do servidor e rotas
const cors = require("cors"); // Aceita que o servidor aceite conexão de diferentes domínios
const todosRoutes = require("./todos.routes"); 
const { response } = require("express");
const app = express();

// Configuração dos middlewares
app.use(express.json()); // Permite que o servidor entenda requisições em JSON
app.use(cors()); // Permite o uso do cors
app.use(todosRoutes); // Ativa as rotas definidas

// Definição de funções e rotas
function teste(request, response) {
  return response.json("fasfasfas");
}
app.get("/fffff", teste);

app.get("/health", (req, res) => {
  return res.json("up");
});

app.listen(3333, () => console.log("Server up in 3333"));
// Faz com que o servidor execute na porta 3333
// Verifica se o servidor está de pé