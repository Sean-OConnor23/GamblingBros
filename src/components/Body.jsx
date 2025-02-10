import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

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