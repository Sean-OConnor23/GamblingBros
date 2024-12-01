import Home from "./Home"
import Page from "./Page"

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function MyRoutes(){
    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path= "Home" element={<Home />} />
            <Route path="NFL" element={<Page sport="Football" />} />
            <Route path="NBA" element={<Page sport="Basketball"/>} />
            <Route path="MLB" element={<Page sport="Baseball" />} />
            <Route path="*" element={<p>Route Wrong</p>} />
        </Routes>
    </BrowserRouter>);
}