import express from "express";
import { randomUUID } from "node:crypto";

const app = express();
app.use(express.json());

// =================
// Initial data
// =================
const pizzasCategoryId = randomUUID();
const drinksCategoryId = randomUUID();

const categories = [
    {
        "id": pizzasCategoryId,
        "name": "Pizzas",
        "description": "Pizzas tradicionais, especiais e sabores da casa."
    },
    {
        "id": drinksCategoryId,
        "name": "Bebidas",
        "description": "Refrigerantes, sucos, águas e outras bebidas para acompanhar a pizza."
    }
];

const products = [
    {
        "id": randomUUID(),
        "categoryId": pizzasCategoryId,
        "name": "Pizza Margherita",
        "description": "Molho de tomate, mussarela, tomate e manjericão fresco.",
        "price": 39.90
    },
    {
        "id": randomUUID(),
        "categoryId": pizzasCategoryId,
        "name": "Pizza Calabresa",
        "description": "Molho de tomate, mussarela, calabresa fatiada e cebola.",
        "price": 42.90
    },
    {
        "id": randomUUID(),
        "categoryId": drinksCategoryId,
        "name": "Coca-Cola 2L",
        "description": "Refrigerante Coca-Cola em garrafa de 2 litros.",
        "price": 12.00
    },
    {
        "id": randomUUID(),
        "categoryId": pizzasCategoryId,
        "name": "Pizza de Chocolate",
        "description": "Pizza doce com chocolate cremoso e granulado.",
        "price": 36.90
    }
]

// =================
// Root
// =================
app.get("/", (req, res) => {
    res.status(200).json({
        message: "API Restaurante",
        version: "1.0.0"
    });
});

// =================
// Categories
// =================
app.get("/categories", (req, res) => {
    res.status(200).json(categories);
});

app.get("/categories/:id", (req, res) => {
    const category = categories.find((category) => {
        return category.id == req.params.id;
    });

    if (!category) {
        return res.status(404).json({
            message: "Categoria não encontrada."
        });
    }

    res.status(200).json(category);
});

app.post("/categories", (req, res) => {
    const category = {
        id: randomUUID(),
        ...req.body,
    }
    
    categories.push(category);

    res.status(201).json(category);
});

// =================
// Products
// =================
app.get("/products", (req, res) => {
    res.status(200).json(products);
});

app.post("/products", (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

export default app;