const { Schema, model } = require("mongoose");

const reservaSchema = new Schema({
  fentrada: Date,
  fsalida: Date,
  cantidadNoches: Number,
  totalReserva:Number,
  user:[{
 type:Schema.type.Number,
 ref:'user'
  }],
  habitaciones:[{
type:Schema.Types.Number,
ref:'Habitacion'
  }]

});

module.exports=model("Reservas",reservaSchema)
