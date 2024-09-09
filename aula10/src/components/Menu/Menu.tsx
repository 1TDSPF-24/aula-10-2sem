import { Link } from "react-router-dom";
import { MenuItem, MenuList, Nav } from "../../style/styled";

export default function Menu() {
  return (
    <Nav>
      <MenuList>
        <MenuItem> <Link to="/">Home</Link></MenuItem>
        <MenuItem><Link to="/produtos">Produtos</Link></MenuItem>

      </MenuList>
    </Nav>
  );
}