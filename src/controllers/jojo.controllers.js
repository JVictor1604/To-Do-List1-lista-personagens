const JojosService = require('../services/jojo.services');

const findJojo = (req, res) => {
  const allJojos = JojosService.findJojoService();
  res.send(allJojos);
};

const findJojoById = (req, res) => {
  res.send(JojosService.findJojoByIdService(req.params.id));
};

const addJojo = (req, res) => {
  let retorno = JojosService.addJojoService(req.body);

  if (retorno == 'ok') {
    res.send('Personagem cadastrado com sucesso');
  } else {
    res.send('Houve um erro');
  }
};

const updateJojosController = (req, res) => {
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
