const personagens = [
  {
    id: 1,

    nome: 'Jonathan Joestar',

    descricao:
      'Jonathan Joestar (ジョナサン・ジョースター Jonasan Jōsutā) é o protagonista da Parte I: Phantom Blood. Filho do nobre George Joestar, Jonathan é um homem honesto, gentil e positivo cuja vida é cheia de tragédia após conhecer seu irmão mais velho adotivo - e antagonista da série - Dio Brando.',

    imagem:
      'https://static.wikia.nocookie.net/jjba/images/6/61/Jonathan_joestar.png/revision/latest/scale-to-width-down/200?cb=20121019052206&path-prefix=pt-br',

    stand: 'The Passion',

    status: 'Herói',

    altura: '195 cm',

    peso: '105 kg',

    parte: 'Parte 1',
  },

  {
    id: 2,

    nome: 'Joseph Joestar',

    descricao:
      "Joseph Joestar (ジョセフ·ジョースターJosefu Jōsutā ) é o principal protagonista da Parte 2 e um aliado nas Partes 3 e 4. Ele é o segundo JoJo da JoJo's Bizarre Adventure",

    imagem:
      'https://static.wikia.nocookie.net/jjba/images/2/2b/220px-JosephJoestar.jpg/revision/latest/scale-to-width-down/270?cb=20210212235235',

    stand: 'Hermit Purple',

    status: 'Herói',

    altura: '195 cm',

    peso: '97 kg',

    parte: 'Parte 2,3 e 4',
  },

  {
    id: 3,

    nome: 'Jotaro Kujo',

    descricao:
      'Jotaro Kujo (空 条 承太郎 Kujō Jotaro) É o protagonista de Stardust Crusaders, a Parte 3 do anime e tem aparições nas Partes 4-6. Jotaro é o terceiro Jojo e é o mais famoso da série.',

    imagem:
      'https://static.wikia.nocookie.net/jjba/images/9/9a/JotaroKujo.png/revision/latest/scale-to-width-down/322?cb=20170204224518&path-prefix=pt-br',

    stand: 'Star Platinum',

    status: 'Herói',

    altura: '1,95 cm',

    peso: '82 kg',

    parte: 'Partes 3 ,4 , 5 e 6',
  },
];

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
