import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

import SportsbookCards from "./SportsbookCards"

export default function Home(){
    return(
        <div>
            <Container>
                <Row>
                    <SportsbookCards></SportsbookCards>
                </Row>
            </Container>
        </div>
    );
}