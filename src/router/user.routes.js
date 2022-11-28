const{Router } = require("express");
const usu = Router();
const ctrus=require("../controller/user.controller");


usu.get('/', ctrus,obtener);
usu.get('/:id', ctrus,obtenerid);
usu.post('/', ctrus.add);
usu.post('/:id', ctrus.edit);

module.exports=usu