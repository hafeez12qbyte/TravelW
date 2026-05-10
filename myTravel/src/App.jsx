import "./App.css"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Destinations from "./components/Destinations"
import Home from "./components/Home"
import Packages from "./Packages"
import About from "./components/About"
import Contact from "./components/Contact"
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/destination" element={<Destinations/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>  
    </>
  )
}
