import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

import SportsbookCards from "./SportsbookCards"
import InfoCarousel from "./InfoCarousel"

//Insert Carousel
//Maybe the rss news articles?

export default function Home(){
    return(
        <div>
            <Container>
                <Row>
                    <InfoCarousel>def</InfoCarousel>
                </Row>
                <Row>
                    <SportsbookCards></SportsbookCards>
                </Row>
            </Container>
        </div>
    );
}