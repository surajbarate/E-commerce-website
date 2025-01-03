import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 
import {BrowserRouter, Route, Routes, Router } from "react-router-dom"
import Home from './pages/Home';
import Header from './components/Header';
function App() {
  return (
    <>  

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" exact={true} element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
