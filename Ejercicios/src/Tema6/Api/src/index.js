const express = require("express");
const app = express();
const morgan = require("morgan");

// el Servicio de Etcd3 debe estar funcionando
const { Etcd3 } = require("etcd3");
const client = new Etcd3();

async function getPort() {
  const port = await client.get("AnimalsPort");
  await client.delete().all();
  return port;
}

// Settings
app.set("json spaces", 2);

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require("./routes/index"));

app.use(function (request, response) {
  response.status(400);
  response.json({
    error: {
      name: "Error",
      message: "Debe acceder a la ruta: /animals",
    },
  });
});

//Starting the server
(async () => {    
  let PORT = await getPort();  
  app.set("port", PORT || process.env.PORT || 3000);   
})().then(() => {
  app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
});  

module.exports = app;
