import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

import SportsbookCards from "./SportsbookCards"
import InfoCarousel from "./InfoCarousel"

//Maybe the rss news articles?

export default function Home(){
    return(
        <Container fluid>
            <Row>
                <InfoCarousel/>
            </Row>
            <Row>
                <SportsbookCards/>
            </Row>
        </Container>
    );
}