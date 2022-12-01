const { Router } = require("express");
const rutasHabitacion = Router();
const ctra = require("../controller/habitacion.controller.js");
const multer = require("multer")
const fecha = Date.now();

const rutaStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/upload/");
  },
  filename: function (req, file, callback) {
    callback(null, fecha + "_" + file.originalname);
  },
});
const upload = multer({Storage: rutaStorage})
rutasHabitacion.get("/", ctra.obtener);
rutasHabitacion.get("/:id", ctra.obtenerid);
rutasHabitacion.post("/",upload.single('img'),ctra.add);
// rutasHabitacion.post('/:id', ctra.edit);

module.exports = rutasHabitacion;
