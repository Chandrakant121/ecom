import './App.css'
import NavBar from './components/Navbar'
import { Routes, Route, Link } from "react-router-dom"
import Homepae from './Pages/Homepage'
import Shoppage from './Pages/Shoppage'
import ProductDetails from './Pages/ProductDetails'
import Login from './Pages/Login'
//npm run dev
//json-server db.json --port 8080
function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepae />} />
        <Route path='/collections/all' element={<Shoppage />} />
        <Route path='/collections/all/:id' element={<ProductDetails />} />
        {/* <Route path='/orders/' element={<Orders />} /> */}
        <Route path='/login' element={<Login />} />
        {/* <Route path='/signup' element={<Signup />} /> */}
      </Routes>
    </div>
  )
}

export default App
