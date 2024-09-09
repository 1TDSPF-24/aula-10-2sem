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


  const [contador, setContador] = useState(0);
  let contador2 = 0;

  const setContador2 = () => {
    contador2 = contador2 + 1;
  }
  useEffect(() => {
    console.log(objProduto);
    console.log(contador);
  }, [objProduto, contador]);

  return (
    <div>
      <h1>Olá, mundo sou o EditarProdutos!</h1>
      <div>
        <h2>ID: {id}</h2>
        <div>
          <button onClick={() => setContador(contador + 1)}>Contador : {contador}</button>
        </div>
        <div>
          <button onClick={() => setContador2()}>Contador 2 - {contador2}</button>
        </div>
        <form>
          <div>
            <label htmlFor="">Nome</label>
            {/* <input type="text" name="nome" value={} onChange={}/> */}
          </div>
        </form>
      </div>
    </div>
  );
}