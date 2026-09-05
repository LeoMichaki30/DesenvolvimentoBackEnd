import express from "express";
import categort from "./models/Category.js";
import Category from "./models/Category.js";

const app = express();

app.get("/categories", async (req, res) => {
  try{
    const categories = await Category.findAll()
    res.status(200).json(categories);
  }catch(error){
    console.error("Erro ao buscar categorias:", error);

    res.status(500).json({
      message: "erro ao buscar categorias"
    })
  }
});

app.post("/categories/:id", async (req, res) => {
  try{
    const category = await Category.create(req.body)

    res.status(200).json(category);
  }catch(error){
    console.error("Erro ao criar categoria:", error);

    res.status(500).json({
      message: "erro ao criar categoria",
    });
  }
});

app.get("/categories/:id", async (req, res) => {
  try{
    const category = await Category.findById(req.params.id)

    res.status(200).json(Category);
  }catch(error){
    console.error("Erro ao buscar categoria:", error);

    res.status(500).json({
      message: "erro ao buscar categoria",
    });
  }
});



app.get("/products", async (req, res) => {
  try{
    const categories = await Category.findAll()
    res.status(200).json(categories);
  }catch(error){
    console.error("Erro ao buscar produtos:", error);

    res.status(500).json({
      message: "erro ao buscar produtos."
    })
  }
});

export default app;
