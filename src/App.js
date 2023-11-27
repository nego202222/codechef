
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'reactstrap';
import Menu from './componentes/Menu';
import Rodape from './componentes/Rodape';
import Home from './componentes/pages/Home';
import Contato from './componentes/pages/Contato';
import Cardapio from './componentes/pages/Cardapio';


import { BrowserRouter, Route, Routes, links, router, routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Container fluid>

      <BrowserRouter>

        <Row>
          <Col>
            {/* aqui vai o nav-bar */}
            <Menu></Menu>
          </Col>
        </Row>


        <Row>
          {/* aqui vai conteudo rotas do site */}
          <Col>
            {/* rotas */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/cardapio" element={<Cardapio />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </Col>
        </Row>

      </BrowserRouter>

      <Row>
        {/* Aqui vai rodape */}
        <Rodape></Rodape>
      </Row>

    </Container>









  );
}

export default App;
