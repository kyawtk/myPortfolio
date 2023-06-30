
import './App.scss'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
function App() {
 return(
  <>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
  </Routes>
  <Footer></Footer>
</>
 )

  
}

export default App
