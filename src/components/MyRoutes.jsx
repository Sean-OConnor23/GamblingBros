import Home from "./Home"
import Page from "./Page"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stats from "./Stats";


export default function MyRoutes(){

    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Stats" element={<Stats />} />
            <Route path="NFL" element={<Page sport= "NFL" />} />
            <Route path="NBA" element={<Page sport="NBA"/>} />
            <Route path="MLB" element={<Page sport="MLB" />} />
            <Route path="*" element={<p>Route Wrong</p>} />
        </Routes>
    </BrowserRouter>);
}
