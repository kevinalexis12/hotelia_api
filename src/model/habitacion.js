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
      type: Schema.Types.ObjectId,
      ref: "Reservas",
    },
  ]
})

habitacionSchema.methods.setImg =function set( filename ){
  this.img =`/public/${filename}`
}
moduleexports=model("Habitacion",habitacionSchema)