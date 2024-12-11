import Home from "./Home"
import Page from "./Page"
import OddsAPI from "../apis/the_odds/the_odds_params.json" with {type: "json"};

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function MyRoutes(){

    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path= "Home" element={<Home />} />
            <Route path="NFL" element={<Page sport={OddsAPI.sport.NFL} />} />
            <Route path="NBA" element={<Page sport={OddsAPI.sport.NBA}/>} />
            <Route path="MLB" element={<Page sport={OddsAPI.sport.MLB} />} />
            <Route path="*" element={<p>Route Wrong</p>} />
        </Routes>
    </BrowserRouter>);
}
