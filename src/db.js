const mongoose= require('mongoose');
const conexionBD = async() =>{
const url=`mongodb+srv://${process.env.usuario}:${process.env.password}@cluster1.wmaaest.mongodb.net/${process.env.DBname}?retryWrites=true&w=majority`;
    try {
        const DB=await mongoose.connect(url);
        console.log("conexion satisfactoria",DB.connection.name);
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=conexionBD;