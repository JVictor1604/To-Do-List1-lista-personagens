
const findJojoService = () => {
  return personagens;
};
const findJojoByIdService = (id) => {
  return personagens.find((personagem) => personagem.id == id);
};

const addJojoService = (personagem) => {

    personagem.id = personagens.length + 1;
    personagens.push(personagem);
    return "ok";

};


const deleteJojoService = (id) => {

    return personagens.splice(personagens.find((personagem) => personagem.id == id),1)

};

const uptadeJojoService = (id, JojoEdited) => {

    
    JojoEdited['id'] = id;
    const JojoIndex = personagens.findIndex((personagem) => personagem.id == id);
    personagens[JojoIndex] = JojoEdited;
    return JojoEdited;


};

module.exports = {
  findJojoByIdService,
  findJojoService,
  addJojoService,
  deleteJojoService,
  uptadeJojoService
};
