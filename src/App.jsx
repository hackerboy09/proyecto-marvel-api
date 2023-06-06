import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navegacion/Navbar';
import Inicio from './components/Paginas/Inicio';
import Personajes from './components/Paginas/Personajes';
import Comics from './components/Paginas/Comics';
import Series from './components/Paginas/Series';




function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/personajes' element={<Personajes/>}/>
      <Route path='/comics' element={<Comics/>}/>
      <Route path='/series' element={<Series/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App



