const Habitacion = require("../model/habitacion");

exports.obtener = async (req, res) => {
  try {
    const habitaciones = await Habitacion.find();
    res.status(200).json(habitaciones);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
exports.obtenerid = async (req, res) => {
  try {
    const id = await req.params.id;
    const habitaciones = await habitacion.findById(id).populate("reserva", {
      _id: 1,
      fentrada: 1,
      fsalida: 1,
      cantidadNoches: 1,
    });
    res.status(200).json(habitaciones);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.add = async (req, res) => {
  try {
    const newhabitacion = new Habitacion(req.boby, req.file);
    if (req.file) {
      const { filename } = req.file;
      newhabitacion.setImg(filename);
    }
    await newhabitacion.save();
    res.status(200).json(newhabitacion); 
  } catch (error) {
    res.status(500).json(error);
  }
}
exports.obtenerid = async (req, res) => {
    try {
      const id = await req.params.id;
      const newhabitacion = await habitacion(req.boby,req.file)
      console.log(req.file);
      if (req.file) {
        const{ filename } = req.file;
        newhabitacion.setImg(filename);
        console.log("si hay imagen")
        
      } else {
        console.log("no hay imagen")
      }
      const cambiohabitacion = await Habitacion.findByIdAndUpdate(id,newhabitacion);
      res.json({ msj:"Habitaciones actualizadas exitosamente"})
    } catch (error) {
      res.status(500).json(error);
    }
  };