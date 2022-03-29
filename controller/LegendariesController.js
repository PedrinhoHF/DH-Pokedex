const LegendaryModel = require('../models/LegendaryModel')
const  controller = {

  getOnelegendary: (request, response) =>{
    const model = new LegendaryModel('123', 'pineco', 'bug', 'bagworm');
    return response.json (model);
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
    const Legendary6 = new LegendaryModel('123', 'pineco', 'bug', 'bagworm');
    const {body} = request
   
    
    
    return response.json([Legendary6,body])

  },
   
}
module.exports = controller