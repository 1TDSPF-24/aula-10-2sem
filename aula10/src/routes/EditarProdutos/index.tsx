import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TipoListaObj } from "../../types";

export default function EditarProdutos() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "EDITAR PRODUTOS";

  const { id } = useParams();

  const listaProdutosString = localStorage.getItem("lista") || '[]';
  const lista: TipoListaObj[] = JSON.parse(listaProdutosString);

  const objProduto = lista.find((p) => p.id == Number(id));

  /*o valor do contador utilizado com o useState é atualizado na tela, enquanto a utilização do let normal não atualiza*/
  const [contador, setContador] = useState(0);

  let contador2 = 0;

  const setContador2 = () => {
    contador2 = contador2 + 1;
  }

  /*useEffect(): utilizado para monitorar elementos */
  useEffect(() => {
    console.log(objProduto);
    console.log(contador);
  }, [objProduto, contador]);
  /*[]: valor a ser monitorado*/


  return (
    <div>
      <h1>Editar Produtos!</h1>
      <div>
        <h2>ID: {id}</h2>
        <div>
          <button onClick={() => setContador(contador + 1)}>Contador : {contador}</button>
        </div>
        <div>
          <button onClick={() => setContador2()}>Contador 2 : {contador2}</button>
        </div>
        <form>
          <div>
            <label htmlFor="">Nome</label>
            <input type="text" name="nome" /> {/*o nome inserido dentro de "name" DEVE ser igual ao nome do atributo*/}
          </div>
        </form>
      </div>
    </div>
  );
}