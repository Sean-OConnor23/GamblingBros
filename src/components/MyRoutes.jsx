import Home from "./Bodies/Home"
import NFL from "./Bodies/NFL"
import NBA from "./Bodies/NBA"
import MLB from "./Bodies/MLB"

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function MyRoutes(){
    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path= "Home" element={<Home />} />
            <Route path="NFL" element={<NFL />} />
            <Route path="NBA" element={<NBA />} />
            <Route path="MLB" element={<MLB />} />
            <Route path="*" element={<p>Route Wrong</p>} />
        </Routes>
    </BrowserRouter>);
}