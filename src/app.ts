import express from "express";
import Category from "./models/Category.js";
import Product from "./models/Product.js";

const app = express();

app.use(express.json());

app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);

    res.status(500).json({
      message: "erro ao buscar categorias",
    });
  }
});

app.post("/categories", async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(200).json(category);
  } catch (error) {
    console.error("Erro ao criar categoria:", error);

    res.status(500).json({
      message: "erro ao criar categoria",
    });
  }
});

app.get("/categories/search/:keyword", async (req, res) => {
  try {
    const categories = await Category.searchByKeyword(req.params.keyword);
    res.status(200).json(categories);
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);

    res.status(500).json({
      message: "erro ao pesquisar categorias",
    });
  }
});




app.put("/categories/:id", async (req, res) => {
  try {
    const categories = await Category.update(req.params.id, req.body);
    res.status(200).json(categories);
  } catch (error) {
    console.error("Erro ao alterar categorias:", error);

    res.status(500).json({
      message: "erro ao alterar categorias",
    });
  }
});

app.delete("/categories/:id", async (req, res) => {
  try {
    await Category.remove(req.params.id);

    res.status(200).json({
      message: "Categoria removida com sucesso",
    });
  } catch (error) {
    console.error("Erro ao deletar categoria:", error);

    res.status(500).json({
      message: "erro ao deletar categoria",
    });
  }
});

app.get("/categories/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    res.status(200).json(category);
  } catch (error) {
    console.error("Erro ao buscar categoria:", error);

    res.status(500).json({
      message: "erro ao buscar categoria",
    });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);

    res.status(500).json({
      message: "erro ao buscar produtos.",
    });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.error("Erro ao buscar produto:", error);

    res.status(500).json({
      message: "erro ao buscar produto",
    });
  }
});

app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error("Erro ao criar produto:", error);

    res.status(500).json({
      message: "erro ao criar produto",
    });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const product = await Product.update(req.params.id, req.body);
    res.status(200).json(product);
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);

    res.status(500).json({
      message: "erro ao atualizar produto",
    });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    await Product.remove(req.params.id);
    res.status(200).json({
      message: "Produto removido com sucesso",
    });
  } catch (error) {
    console.error("Erro ao deletar produto:", error);

    res.status(500).json({
      message: "erro ao deletar produto",
    });
  }
});

export default app;
