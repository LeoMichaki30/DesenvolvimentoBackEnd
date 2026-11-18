import { Router } from "express";
import ProductController from "../controller/ProductController.js";

const router = Router();

/**
 * @openapi
 * /products:
 *   get:
 *     tags: [Products]
 *     summary: Listar todos os produtos
 *     description: Retorna todos os produtos cadastrados
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Erro interno ao buscar produtos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erro ao buscar produtos.
 */
router.get("/", ProductController.getAll);

/**
 * @openapi
 * /products/search/{keyword}:
 *   get:
 *     tags:
 *       - Products
 *     summary: Buscar produtos por palavra-chave
 *     description: Retorna produtos com a palavra-chave no título ou na descrição
 *     parameters:
 *       - in: path
 *         name: keyword
 *         required: true
 *         description: Palavra-chave utilizada na pesquisa
 *         schema:
 *           type: string
 *           example: pizza
 *     responses:
 *       200:
 *         description: Pesquisa de produtos concluída com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       400:
 *         description: Palavra-chave não informada ou inválida.
 *       500:
 *         description: Erro interno ao pesquisar produtos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Erro ao pesquisar produto.
 */
router.get("/search/:keyword", ProductController.getByKeyword);

/**
 * @openapi
 * /products/{id}:
 *   get:
 *     tags:
 *       - Products
 *     summary: Buscar produto por ID
 *     description: Retorna um produto específico pelo seu identificador
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto encontrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: ID não informado ou produto não encontrado.
 */
router.get("/:id", ProductController.getById);

/**
 * @openapi
 * /products:
 *   post:
 *     tags:
 *       - Products
 *     summary: Criar um produto
 *     description: Cadastra um novo produto como disponível e ativo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProduct'
 *     responses:
 *       200:
 *         description: Produto criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Dados inválidos.
 *       500:
 *         description: Erro interno ao criar produto.
 */
router.post("/", ProductController.create);

/**
 * @openapi
 * /products/{id}:
 *   put:
 *     tags:
 *       - Products
 *     summary: Atualizar um produto
 *     description: Atualiza os dados informados de um produto existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProduct'
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Dados inválidos.
 *       404:
 *         description: ID não informado ou produto não encontrado.
 *       500:
 *         description: Erro interno ao atualizar produto.
 */
router.put("/:id", ProductController.update);

/**
 * @openapi
 * /products/{id}:
 *   delete:
 *     tags:
 *       - Products
 *     summary: Remover um produto
 *     description: Remove um produto pelo seu identificador
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto removido com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Produto removido com sucesso.
 *       404:
 *         description: ID não informado ou produto não encontrado.
 *       500:
 *         description: Erro interno ao remover produto.
 */
router.delete("/:id", ProductController.remove);

export default router;
