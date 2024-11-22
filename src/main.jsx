
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider , Route, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home'
// import Navbar from './components/Navbar'+
import GitHub from './components/GitHub'
// import Footer from './components/Footer'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import FetchGitData from './components/FetchGitData.js'
import GitUser from './components/GitUser.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
      
//       {
//         path: "",
//         element: <Home />,

//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "github",
//         element: <GitHub />,
//        loader:FetchGitData
//       },
     
//     ],
//   },
// ])

let data1=45;
let data2=67;
const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="" element={<Home />} />
    <Route path="about" element={<About val1={data1} val2={data2} />} />
    <Route path="contact" element={<Contact />} >
    <Route path="gituser" element={<GitUser />}  />
    </Route>
    <Route path="github" element={<GitHub />} loader={FetchGitData} />
  </Route>
 )
)
export default router



createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)