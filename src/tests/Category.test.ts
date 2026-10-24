import { describe, it, expect} from "vitest";
import {Category} from "../models/Category.js";

describe("Category - Testes Unitários", () => {


    it("deve criar uma categoria válida", () => {
        const name = "pizza";
        const display_order = 1;
        const description = "Categoria de pizzas";
        const icon = "pizza-icon.png";

        const category = new Category (
            name,
            display_order,
            description,
            icon
        );

        expect(category.getName()).toBe("Pizza");
        expect(category.getDisplayOrder()).toBe(1);
        expect(category.getDescription()).toBe("Categoria de pizzas");
        expect(category.getIcon()).toBe("pizza-icon.png");
        expect(category.isActive()).toBe(true);
        expect(category.getId()).toBeUndefined();
    });


    it("não deve criar uma categoria com um nome vazio", () => {
        const name = "";
        const display_order = 1;

        expect(() => {
            new Category(name, display_order);
        }).toThrow("O nome da categoria é obrigatório.");
    });

     it("não deve permitir ordem de exibição negativa", () => {
        const name = "";
        const display_order = 1;

        expect(() => {
            new Category(name, display_order);
        }).toThrow(
            "A ordem de exibição deve ser um número inteiro maior ou igual a zero."
        );
    });
});

 it("deve remover espaços antes e depois do nome de uma categoria", () => {

        const name = "pizza";
        const display_order = 1;

        const category = new Category ( name, display_order);

        expect(category.getName()).toBe("Pizza");
    });

     it("não deve permitir criar uma categoria contendo apenas espaços", () => {

        const name = "   ";//trim()
        const display_order = 1;


        expect(() => {
            new Category(name, display_order);
        }).toThrow("O nome da categoria é obrigatório.");
    });

    it("não deve permitir ordem de exibição decimal", () => {

        const name = "pizza";
        const display_order = 1.5;

        expect(() => {
            new Category(name, display_order);
        }).toThrow(
            "A ordem de exibição deve ser um número inteiro maior ou igual a zero."
        );
    });

     it("deve permitir ordem de exibição igual a zero", () => {

        const name = "pizzas";
        const display_order = 0;

        const category = new Category ( name, display_order);

        expect(category.getDisplayOrder()).toBe(0);
    });

    it("deve permitir renomear uma categoria existente", () => {

        const category = new Category("pizzas", 1);

        category.rename("Bebidas");

        expect(category.getName()).toBe("Bebidas");
    });

    it("deve preservar o nome original após uma tentativa inválida de renomeação", () => {

        const category = new Category ("Pizzas", 1);

        expect(() => {
            category.rename("");
        }).toThrow("O nome da categoria é obrigatório.");

        expect(category.getName()).toBe("Pizzas");
    });

    it("deve permitir desativar e reativar uma categoria", () => {

        const category = new Category ("Pizzas", 1);

        category.deactivate();

        expect(category.isActive()).toBe(false);

        category.activate();

        expect(category.isActive()).toBe(true);
    });

     it("deve restaurar uma categoria existente", () => {

        const id = "";
        const name = "Pizza";
        const display_order = 1;
        const active = false;
        const description = "Categoria de pizzas";
        const icon = "pizza-icon.png";

        const category = Category.restore(
            id,
            name,
            display_order,
            active,
            description,
            icon
        );

        expect(category.getId()).toBe(id);
        expect(category.getName()).toBe("Pizza");
        expect(category.getDisplayOrder()).toBe(1);
        expect(category.getDescription()).toBe("Categoria de pizzas");
        expect(category.getIcon()).toBe("pizza-icon.png");
        expect(category.isActive()).toBe(false);
    });

     it("deve permitir alterar a descrição de uma categoria", () => {

        const name = "Pizza";
        const display_order = 1;
        const description = "Categoria de pizzas tradicionais";

        const category = new Category(
            name,
            display_order,
            description,
        );

       category.changeDescription("Categoria de pizzas tradicionais e especiais ")

       expect(category.getDescription()).toBe("Categoria de pizzas tradicionais e especiais");
    });

    it("deve permitir alterar a ícone de uma categoria", () => {

        const category = new Category(
            "Pizza",
            1,
            "Categoria de pizzas tradicionais",
            "pizza-icon.png"
        );

       category.changeIcon("pizza-icon.png")

       expect(category.getIcon()).toBe("pizza-icon.png");
    });

    it("deve permitir alterar a ordem de exibição de uma categoria", () => {

        const category = new Category( "Pizza", 1);

       category.changeDisplayOrder(22)

       expect(category.getDisplayOrder()).toBe(22);
    });


