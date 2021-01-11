const { Router } = require('express');
const router = Router();
const animales = require("../data/animales.json");

router.get("/animals", (req, res) => {
  res.status(200);
  res.header("Content-Type", "application/json");
  res.json(animales);   
});

router.get("/animals/:id", (req, res) => {
  if (animales.animales.hasOwnProperty(req.params.id)) {
    res.status(200);
    res.header("Content-Type", "application/json");
    res.json(animales.animales[req.params.id]);
  }else{
    res.status(400).send("No existe ese animal");;
  }  
});

router.post("/animals/:animal/:especie/:alimentacion", (req, res) => {
  
  let id = animales.animales.push({
    animal: req.params.animal,
    especie: req.params.especie,
    alimentacion: req.params.alimentacion
  });   
  console.log(animales.animales[id - 1]);
  res.status(200);
  res.send({
    animal: animales.animales[id-1],
    message: "Animal POST ok",
  });
});
module.exports = router;
