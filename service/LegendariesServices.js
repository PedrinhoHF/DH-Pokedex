const LegendaryModel = require('../models/LegendaryModel')
const { v4: uuidv4 } = require('uuidv4')
// a constante deve se levar o nome da pasta para ficar facil de localizar
const LegendariesServices = {
  ListLegendaries: () =>{
    const lucario = new LegendaryModel(1 , 
      'Lucario',
      'Lucario is a bipedal, canine-like Pokémon, its a fighter pokemon',
      'Fighter',
      '1000,000',
      '1000,000',
      '1000,000',
      '1000,000',
      '1000,000',
      '1000,000',
    )
    const mewtwo = new LegendaryModel(2 , 
      'mewtwo',
      'Lucario is a bipedal, canine-like Pokémon, its a fighter pokemon',
      'Fighter',
      '1000,000',
      '1000,000',
      '1000,000',
      '1000,000',
      '1000,000',
      '1000,000',
    )

    return[lucario,mewtwo];
  },
  // A lista criada abaixo seria para caso o usuario fizesse uma request no site, procurando
  //um pokemon em questão, assim as linhas abaixo do codigo estão responsaveis para retornrar o pokemon
  // conforme os parametros configurados no Service e o que o usuario digitou a pesquisar

  listPokemonData: (pokemonName) =>{
    const pokemonList = LegendariesServices.ListLegendaries();
    const pokemon = pokemonList.find((item) => item.name === pokemonName);
  
    return pokemon;
  },

  createLegendary: (id,
    name,
    description,
    type,
    category,
    HealthPoints,
    specialAttack,
    defense,
    experience,
    specialDefense) => {
    const newLegendary = new LegendaryModel(
     uuidv4 (),
      name,
      description,
      type,
      category,
      HealthPoints,
      specialAttack,
      defense,
      experience,
      specialDefense
      )

      return newLegendary;
    }
    
}


module.exports = LegendariesServices;