import type { Request, Response } from "express";
import ProductRepository from "../repository/ProductRepository.js";

async function findAll(req: Request, res: Response) {
    try {
        const products = await ProductRepository.findAll();

        res.status(200).json(products);
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);

        res.status(500).json({
            message: "Erro ao buscar produtos.",
        });
    }
}

export default {
    findAll,
};