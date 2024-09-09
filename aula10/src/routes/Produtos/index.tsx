import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../listaProdutos";
import { TipoListaObj } from "../../types";

export default function Produtos() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "PRODUTOS";
  const { id } = useParams();


  const listaProdutosString = localStorage.getItem("lista") || '[]';
  const lista: TipoListaObj[] = JSON.parse(listaProdutosString);

  useEffect(
    () => {
      console.log(objProdutos)
    }
  );

  const [contador, setContador] = useState



  const objProdutos = lista.find((p) => p.id == Number(id));

  return (
    <div>
      <h1>Lista de Produtos!</h1>
      <div>
        <h2> id: {id}</h2>
        <form >
          <div>
            <label htmlFor=""> Nome</label>
            <input type="text" name="nome" value={ } onChange={ } />
          </div>
        </form>
      </div>
    </div>
  );
}