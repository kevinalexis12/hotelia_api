const{Router } = require("express");
const reserva = Router();
const ctrre=require("../controller/reserva.controller");


reserva.get('/', ctrre,obtener);
reserva.get('/:id', ctrre,obtenerid);
reserva.post('/', ctrre.add);
reserva.post('/:id', ctrre.edit);

module.exports=reserva
