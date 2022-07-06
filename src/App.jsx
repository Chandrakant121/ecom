import './App.css'
import NavBar from './components/Navbar'
import { Routes, Route, Link } from "react-router-dom"
import Homepae from './Pages/Homepage'
import Shoppage from './Pages/Shoppage'
//npm run dev
//json-server db.json --port 8080
function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepae />} />
        <Route path='/collections/all' element={<Shoppage />} />
      </Routes>
    </div>
  )
}

export default App
