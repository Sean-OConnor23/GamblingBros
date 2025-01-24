import PropTypes from 'prop-types';

import Body from "./Body.jsx"
import Footer from "./Footer.jsx"


export default function Main(props){
    return(
        <div>
            <Body sport={props.sport} />
            <Footer />
        </div>
    );
}

Main.propTypes = {
    sport: PropTypes.string.isRequired
}