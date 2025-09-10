import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import HeaderSand from './Components/Header/HeaderSand';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import SobrePage from './Pages/SobrePage/SobrePage';
import ReportPage from './Pages/ReportPage/ReportPage';
import GaleriaPage from './Pages/GaleriaPage/GaleriaPage';
import MetodologiaPage from './Pages/MetodologiaPage/MetodologiaPage';
import FaqPage from './Pages/FaqPage/FaqPage';

function App() {
  return (
    <>
      <HeaderSand />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/sobre' element={<SobrePage/>}/>
        <Route path='/formulario' element={<ReportPage/>}/>
        <Route path='/galeria' element={<GaleriaPage/>}/>
        <Route path='/metodologia' element={<MetodologiaPage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;

