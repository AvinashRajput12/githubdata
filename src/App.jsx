// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
// import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
// import GitHub from './components/GitHub'
// import Contact from './components/Contact'


// import About from './components/About'

function App() {
  

  return (
      // <Router>
      //   <Navbar/>
      //     <Routes>
      //       <Route path ='/' element={<Home/>} />
      //       <Route path ='/about' element={<About/>} />
      //       <Route path ='/contact' element={<Contact/>} />
      //       <Route path ='/gitHub' element={<GitHub/>} />
      //     </Routes>
      //   <Footer/>
      // </Router>

      <>
      <Navbar/>



      <Outlet/>
      <Footer/>
      
      </>
  )
}

export default App
