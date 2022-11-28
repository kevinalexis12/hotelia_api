const{Router } = require("express");
const rutasHabitacion = Router();
const ctra=require("../controller/habitacion.controller.js");


// rutasHabitacion.get('/', ctra,obtener);
// rutasHabitacion.get('/:id', ctra,obtenerid);
// rutasHabitacion.post('/', ctra.add);
// rutasHabitacion.post('/:id', ctra.edit);

module.exports=rutasHabitacion
