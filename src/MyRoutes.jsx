import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

const MyRoutes = () => {
    return(
    <Router>
        <Routes>
            <Route exact path = "/" element={<NavigationBar></NavigationBar>}/>
            <Route path='/NFL' element={<h1>TEST</h1>}></Route>
        </Routes>
    </Router>);
};

export default MyRoutes;