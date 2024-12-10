import Table from "./Table"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OddsAPI from "../apis/the_odds/the_odds_params.json" with {type: "json"};
import * as OddsAPITest from "../apis/the_odds/get_sport_data";
import testResponse from "../apis/the_odds/Test.json" with {type: "json"};

export default function Body(props){
    //var test = OddsAPITest.get_odds(props.sport, OddsAPI.regions.USA, OddsAPI.markets.Moneyline, OddsAPI.Bookmakers_All)

    return(
        <div><Container fluid>
        <Row>
            <Col><Table name= {props.sport} response={testResponse}/></Col>
            <Col></Col> 
        </Row>
    </Container> </div>
    );
}