import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

export default function Body(props){
    return(
        <div><Container fluid>
        <p>{props.sport}</p>
    </Container> </div>
    );
}

Body.propTypes = {
    sport: PropTypes.string.isRequired
    
}