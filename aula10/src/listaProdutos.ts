import { TipoListaObj } from "./types";

//Criar uma lista de objetos de Produtos Eletrônicos
export const listaProdutos:TipoListaObj[] = [
    {
        id: 1,
        nome: "Smartphone",
        preco: 1500.00,
        marca: "Apple",
        categoria: "Celulares",
        descricao: "Celular com tela de 6 polegadas e 4GB de RAM",
        imagem:"/img/produto-640×320.png",
    },
    {
        id: 2,
        nome: "Notebook",
        preco: 3000.00,
        marca: "Dell",
        categoria: "Computadores",
        descricao: "Notebook com processador Intel Core i7 e 16GB de RAM",
        imagem:"/img/produto-640×320.png",
    },
    {
        id: 3,
        nome: "Tablet",
        preco: 800.00,
        marca: "Samsung",
        categoria: "Celulares",
        descricao: "Tablet com tela de 10 polegadas e 3GB de RAM",
        imagem:"/img/produto-640×320.png",
    },
    {
        id: 4,
        nome: "Impressora",
        preco: 200.00,
        marca: "HP",
        categoria: "Impressoras",
        descricao: "Impressora de alta qualidade com tecnologia de impressão a jato de tinta",
        imagem:"/img/produto-640×320.png",
    },
];

if(!localStorage.getItem("lista")){
    localStorage.setItem("lista", JSON.stringify(listaProdutos));
} 