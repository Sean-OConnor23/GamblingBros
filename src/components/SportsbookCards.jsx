import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

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
        ESPNBet: "An online sports betting service operated by Penn Entertainment"}

    return(
        <div>
            <CardGroup>
                {Object.keys(sportsbooks).map((brand, index) =>(   
                    <Card key={index}>                               
                        <svg src="/DraftKings.svg" />                              
                        <Card.Body>                                               
                            <Card.Title>{sportsbooks[brand]}</Card.Title>
                            <Card.Subtitle className="text-muted">{slogan[brand]}</Card.Subtitle>
                            <Card.Text> {description[brand]} </Card.Text> 
                            <Button variant="primary bottom" href={urls[brand]}>Visit {brand}</Button>                                                           
                        </Card.Body>                                 
                    </Card>                                             
                    ))}
            </CardGroup>
        </div>
    );
}