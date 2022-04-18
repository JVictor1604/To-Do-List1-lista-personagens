const JojosService = require('../services/jojo.services');

const findJojo = (req, res) => {
  const allJojos = JojosService.findJojoService();
  res.send(allJojos);
};

const findJojoById = (req, res) => {

  if (!req.params.id) {
    return res.status(404).send({ message: "Paleta não encontrada!" })
  }

  res.send(JojosService.findJojoByIdService(req.params.id));
};

const addJojo = (req, res) => {
  const personagem = req.body;

  if (
    !personagem.nome ||
    !personagem.descricao ||
    !personagem.imagem ||
    !personagem.stand ||
    !personagem.status ||
    !personagem.altura ||
    !personagem.peso ||
    !personagem.parte
  ) {
    return res.send(
      res.status(400).send({
        mensagem:
          'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!',
      }),
    );
  }

  let retorno = JojosService.addJojoService(req.body);

  if (retorno == 'ok') {
    res.send('Personagem cadastrado com sucesso');
  } else {
    res.send('Houve um erro');
  }
};

const updateJojosController = (req, res) => {

  if (!req.params.id) {
    return res.status(404).send({ message: "Paleta não encontrada!" })
  }

  const updatedJojo = JojosService.uptadeJojoService(+req.params.id, req.body);
  res.send(updatedJojo);
};

const deleteJojo = (req, res) => {
  JojosService.deleteJojoService(req.params.id);

  res.send('Personagem deletado com sucesso');
};

module.exports = {
  findJojo,
  findJojoById,
  addJojo,
  deleteJojo,
  updateJojosController,
};
