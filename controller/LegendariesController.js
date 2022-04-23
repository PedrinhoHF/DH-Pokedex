//controller nao faz validações, nem regras de negocios, ela apenas indica aonde deve ir//
const legendariesServices = require('../service/LegendariesServices')
const LegendaryModel = require('../models/LegendaryModel')
const LegendariesServices = require('../service/LegendariesServices');
const { response } = require('express');
const  controller = {
  getOnelegendary: (request, response) =>{
  const {id} = request.params;
  const { name } = request.query;
  
  const legendary = LegendariesServices.listPokemonData(name);
    
  return response.json (legendary);
  },
    create: (request, response) =>{
      const {
      name,
      description,
      type,
      category,
      HealthPoints,
      specialAttack,
      defense,
      experience,
      specialDefense
      } = request.body

      const legendary = legendariesServices.createLegendary(
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
      return response.json(legendary)
    },
  


   getAllegendary: (request, response) =>{
   const Legendary1 = new LegendaryModel('123', 'pineco', 'bug', 'bagworm');
   const Legendary2  = new LegendaryModel('123', 'Lazaro', 'bug', 'bagworm');
   const Legendary3 = new LegendaryModel('123', 'Ivens', 'bug', 'bagworm');
   const Legendary4 = new LegendaryModel('123', 'Bruno', 'bug', 'bagworm');
   const Legendary5 = new LegendaryModel('123', 'Luiz', 'bug', 'bagworm');
   return response.json({Legendary1 ,Legendary2,Legendary3,Legendary4})
  },
  postOnelegendary: (request, response) =>{
    const Legendary6 = new LegendaryModel('195', 'pineco', 'bug', 'bagworm');
    const {body} = request
   
    
    
    return response.json([Legendary6,body])

  },
   
}
module.exports = controller