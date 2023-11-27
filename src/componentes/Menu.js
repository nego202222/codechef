import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Link} from 'react-router-dom'

function Menu() {

  const [paginaAtual, mudaPaginaAtual] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Link to="/" className='navbar-brand'>CodeChef</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className={paginaAtual === 'Home' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('Home')}>Início</Link>
            </NavItem> 
            <NavItem>
              <Link to="/cardapio" className={paginaAtual === 'Cardapio' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('Cardapio')}>Cardápio</Link>
            </NavItem>
            <NavItem>
              <Link to="/contato" className={paginaAtual === 'Contato' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('Contato')}>Contato</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default Menu