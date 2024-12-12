
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Inicio from "./components2/Inicio";
import Page1 from "./components2/Page1";
import Page2 from "./components2/Page2";
import About from "./components2/About";
import Layout from "./components2/Layout";

const App = () => {
  return (
    <>
      
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>

                    <Route index element={<Inicio />}></Route>
                    <Route path="inicio" element={<Inicio />}></Route>
                    <Route path="page1" element={<Page1 />}></Route>
                    <Route path="page2" element={<Page2 />}></Route>
                    <Route path="about" element={<About />}></Route>
                  </Route>

                </Routes>
              </BrowserRouter>
    </>
  );
}

export default App;


/*

export default function App() {

  return (
    <>
    
      <Perfil nombre='Pepe' edad='40' bio='Lorem ipsum' ciudad='Sevilla' imagen={user} isPremium={false} habilidades={['HTML', 'CSS']}></Perfil>
      <Perfil nombre='Juan' edad='19' bio='Lorem ipsum2' ciudad='Valencia' isPremium={true} habilidades={['JavaScript', 'React', 'CSS']}></Perfil>
      <Perfil nombre='Ismael' edad='28' bio='Lorem ipsum3' ciudad='Madrid' imagen={user} isPremium={true}></Perfil>
    </>
  );
};
*/