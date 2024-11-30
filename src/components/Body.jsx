import Table from "./Table"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Body(props){
    return(
        <div><Container fluid>
        <Row>
            <Col><Table name= {props.sport} age={30}/></Col>
        </Row>
    </Container> </div>
    );
}