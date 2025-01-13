import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Berlines from './pages/Berlines';
import Citadine from './pages/Citadine';
import Suv from './pages/Suv';
import Luxury from './pages/Luxury';
import Sport from './pages/Sport';
import Mini from './pages/Mini';
import Login from './login'; // Importer le composant Login
import './App.css';
import Sko from './pages/Sko';
import ModalPage from './pages/ModalPage';
import ModalPageMer from './pages/ModalPageGolf';
import ModelPagePeugeot from './pages/ModalPagePeugeot'
import ModelPageGolf from './pages/ModalPageGolf'
import ModelPageFiat from './pages/ModalPageFiat.jsx'
import ModalPageMerG from './pages/ModalPageMerG.jsx'


function App() {
    return (
        <BrowserRouter basename="/rent-car">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Categories/berlines" element={<Berlines />} />
                <Route path="/Categories/citadine" element={<Citadine />} />
                <Route path="/Categories/luxury" element={<Luxury />} />
                <Route path="/Categories/suv" element={<Suv />} />
                <Route path="/Categories/sport" element={<Sport />} />
                <Route path="/Categories/mini" element={<Mini />} />
                <Route path="/login" element={<Login />} /> {/* Nouvelle route pour la page Login */}
                <Route path="/sko" element={<ModalPage />} />
                <Route path="/Mer" element={<ModalPageMer />} />
                <Route path="/pgt" element={<ModelPagePeugeot/>} />
                <Route path="/golf" element={<ModelPageGolf/>} />
                <Route path="/fiat" element={<ModelPageFiat/>} />
                <Route path="/MerG" element={<ModalPageMerG/>} />
                

            </Routes>
        </BrowserRouter>
    );
}

export default App;
