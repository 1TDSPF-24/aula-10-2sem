import styled from "styled-components"

export const MeuH1 = styled.h1`
    background-color: blueviolet;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    width: 80%;
    border: 2px solid #0f0;
`

export const Header = styled.header`
  background-color: #4CAF50;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 1.5em;
`
export const MinhaTabela = styled.table`
  width: 80vw;
  margin: 0 auto;
  border: 2px solid #000000;
  font-size: 24px;
  font-family: 'Courier New', Courier, monospace;

  & 
  thead{ 
    background-color: aliceblue;
    & th {
      border: 2px solid #000000;
    }
  }

  & tbody 
  {
    background-color: white;
    & td
    {
      border: 2px solid red;
    }

    // Aplicando para impares
    & tr:nth-child(even)
  {
    background-color: beige;
  }

   // Aplicando para pares
  & tr:nth-child(odd)
  {
    background-color: #000000;
  }

  & tr:hover
  {
    background-color: aqua;
  }

  }
`

// Estilizando o Footer
export const Footer = styled.footer`
  background-color: #333;
  padding: 10px;
  text-align: center;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
`

export const MainContent = styled.main`
  padding: 20px;
  margin-top: 60px; // Espaço para o Header
  margin-bottom: 40px; // Espaço para o Footer
`

// Estilizando o contêiner do menu
export const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`

// Estilizando a lista de itens do menu
export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`

// Estilizando o item de lista
export const MenuItem = styled.li`
  display: inline;
`

// Estilizando o item de link
export const MenuLink = styled.a`
  color:#fff;
  text-decoration: none;
  padding: 10px 20px;
  display: block;
`
export const ImgProdutos = styled.img`
  display:block;
  max-width:100%;
  width:20%;
  margin:0 auto;
`