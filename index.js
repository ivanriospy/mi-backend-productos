// index.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const productos = [
  {
    codigo: 1,
    descripcion: "papas",
    precio: 12.33
  },
  {
    codigo: 2,
    descripcion: "manzanas",
    precio: 54
  }
];
app.get("/productos", (req, res) => {
  res.json(productos);
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend iniciado en http://localhost:${PORT}`);
});
