const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  _id: Number,
  tipoDoc: String,
  nombre: String,
  apellido: String,
  fnacimiento: Date,
  genero: String,
  email: String,
  telefono: Number,
  PaisOrigen: {type:String,require:true,unique:true ,obligatorio:true},
  password: password,
  tipouser: String,
  img: String,
  reserva: [
    {
      type: Schema.type.Objectid,
      ref: "Reservas",
    },
  ],
});

module.exports=model('user',userSchema)
