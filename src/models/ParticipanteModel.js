// Dados iniciais (seed)
let participantes = [
  { 
    id: 1, 
    nome: "Isa Moraes", 
    email: "isamoraes@email.com" 
  },
  { 
    id: 2, 
    nome: "Nathan Custódio", 
    email: "nathan@email.com" 
  },
  { 
    id: 3, 
    nome: "Maria Fernanda", 
    email: "maria@email.com" 
  },
];

let proximoId = 4;

// Listar todos os participantes
function listarTodos() {
  return participantes;
}

// Buscar por ID
function buscarPorId(id) {
  return participantes.find((p) => p.id === id);
}

// Criar participante
function criar(dados) {
  const novoParticipante = {
    id: proximoId,
    nome: dados.nome,
    email: dados.email,
  };

  proximoId++;
  participantes.push(novoParticipante);
  return novoParticipante;
}

// Atualizar participante
function atualizar(id, dados) {
  const index = participantes.findIndex((p) => p.id === id);
  if (index === -1) return null;
  participantes[index] = {
    ...participantes[index],
    ...dados,
    id: id,
  };
  return participantes[index];
}

// Deletar participante
function deletar(id) {
  const index = participantes.findIndex((p) => p.id === id);
  if (index === -1) return false;
  participantes.splice(index, 1);
  return true;
}

module.exports = {
  listarTodos,
  buscarPorId,
  criar,
  atualizar,
  deletar,
};