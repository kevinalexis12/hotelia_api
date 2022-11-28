const expres = require("express");
const conexionBD = require("./db");
const rutashab = require("./router/habitacion.routes");
// const rutasuser = require("./router/user.routes");
// const rutasres = require("./router/reserva.routes");
const app = expres();

require("dotenv").config();
//connecion a la base de datos
conexionBD();
//configuraciones basicas

app.set("name", "api-hotelia");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || "localhost");

//midleware
app.use(expres.json("public"));
app.use("/public", expres.static("public/upload"));

app.use("/habitaciones", rutashab);
// app.use("/user", rutasuser);
// app.use("/reserva", rutasres);

module.exports = app;
