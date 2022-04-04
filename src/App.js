import Main from "./components/Main/Main";
import OurCoffee from "./components/OurCoffee/OurCoffee";
import Pleasure from "./components/Pleasure/Pleasure";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='pleasure' element={<Pleasure/>}/>
                <Route path='coffee' element={<OurCoffee/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
