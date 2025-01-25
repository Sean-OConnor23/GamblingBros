import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SportsbookCarousel from "./SportsbookCarousel"

export default function Home(){
    return(
        <div>
            <Container>
                <Row>
                    <SportsbookCarousel></SportsbookCarousel>
                </Row>
            </Container>
        </div>
    );
}