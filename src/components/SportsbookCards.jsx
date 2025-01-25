import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack';

export default function SportsbookCards(){

    var sportsbooks = {DraftKings : "DraftKings", FanDuel: "FanDuel", BetMGM: "BetMGM", ESPNBet: "ESPN Bet"};
    var slogan = {DraftKings : "The Crown Is Yours", FanDuel:"Making Winning Our Tradition", 
        BetMGM:"Betting Got Better", ESPNBet:"The Official Sportsbook of ESPN"}
    var urls = {DraftKings : "https://sportsbook.draftkings.com/sportsbook", 
        FanDuel : "https://sportsbook.fanduel.com",
        BetMGM: "https://sports.betmgm.com/en/",
        ESPNBet: "https://about.espnbet.com"}
    var description = {DraftKings : "Bet on all of your favorite sports with America's Top-Rated Sportsbook", 
        FanDuel: "Daily Fantasy Sports and Online U.S Sportsbook & Casino",
        BetMGM: "A market-leading sports betting and gaming entertainment company",
        ESPNBet: "A brand of American sportsbooks and online sports betting services operated by Penn Entertainment"}

    return(
        <div>
            <Row>
                {Object.keys(sportsbooks).map((brand, index) =>(   
                    <Col key={index}>
                    <Card  >
                        <Card.Img variant="top" src="./DraftKings.svg" />
                        <Card.Body>
                            <Stack gap={3}>
                                <div>
                                    <Card.Title>{sportsbooks[brand]}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{slogan[brand]}</Card.Subtitle>
                                    <Card.Text> {description[brand]} </Card.Text>
                                </div>
                                <div>
                                    <Button variant="primary" href={urls[brand]}>Visit {brand}</Button>
                                </div>
                            </Stack> 
                        </Card.Body>
                    </Card>
                    </Col>
                    
                ))}
            </Row>
        </div>
    );
}