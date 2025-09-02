
import Navbar from './components/Navbar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';





function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
      </BrowserRouter>
      
      

    </>
    
  )
}

export default App
