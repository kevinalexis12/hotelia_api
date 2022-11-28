const { Schema, model } = require("mongoose");

const habitacionSchema = new Schema({
  _id: Number,
  nombreHab: String,
  capacidad: Number,
  descripcion: String,
  wifi: String,
  tv: String,
  banio: String,
  cajafuerte: String,
  nevera: String,
  valornoche: Number,
  img: String,
  estado: String,
  reserva: [
    {
      type: Schema.type.ObjectId,
      ref: "Reservas",
    },
  ]
})
moduleexports=model("Habitacion",habitacionSchema)