import { Row, Col } from "reactstrap";
import CaroseulInicio from "../CaroseulInicio";
import ItemCardapio from "../ItemCardapio";
function Home() {
    return (
        <div>
            <Row>
                <Col>
                    {/* Aqui vai o Carousel */}
                    <CaroseulInicio></CaroseulInicio>
                </Col>
            </Row>
            <Row>
                <Col className="text-center my-3">
                    <h1>Mais pedidos</h1>
                </Col>
            </Row>
            <Row>
                <Col className="text-center py-3">
              <ItemCardapio></ItemCardapio>
                </Col>
             
                <Col>
                
                </Col>

                <Col>
                
                </Col>

                <Col>
                
                </Col>
            </Row>
        </div>
    )
}
export default Home;