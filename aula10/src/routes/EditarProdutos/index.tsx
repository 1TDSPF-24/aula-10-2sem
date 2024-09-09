import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TipoListaObj } from "../../types";

export default function EditarProdutos() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "EDITAR PRODUTOS";

  //Realizando um destructuring para recuperar o parâmetro que foi passado na rota:
  //Ex: Se a rota criada foi: /meus-dados/:dados
  //O destructuring irá recuperar o dado que foi passado na rota e atribuir a propriedade de um elemento cuja o nome é aquele criado na rota, antes do dois pontos,ou seja, (:dados)
  //Então teriamos que realizar a seguinte ação para receber esta informação.
  // const{dados} = useParams(), um detalhe aqui é que o useParams() pertence ao react-router e deve ser importado dele
  const { id } = useParams();

  const listaProdutosString = localStorage.getItem("lista") || '[]';
  const lista: TipoListaObj[] = JSON.parse(listaProdutosString);
  const objProduto = lista.find((p) => p.id == Number(id));


  const [contador, setContador] = useState(0);

  let contador2 = 0;
  const setContador2 = () => {
    contador2 += 1
  }

  useEffect(() => {
    console.log(objProduto);
    console.log(contador);

  }, [objProduto, contador]);

  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <div>
      <dialog open={openModal}>
        <div onClick={() => closeModal()}>
          x
        </div>
        <h1>Olá, mundo sou o EditarProdutos!</h1>
        <div>
          <h2>ID: {id}</h2>
          <div>
            <button onClick={() => setContador(contador + 1)}>Contador: {contador}</button>
          </div>
          <div>
            <button onClick={() => setContador2}>Contador 2 - {contador2}</button>
          </div>
          <form action="#">
            <div>
              <label htmlFor="">Nome</label>
              {/* <input type="text" name="nome" value={ } onChange={ } /> */}
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}