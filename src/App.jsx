import { Route, Routes } from "react-router-dom"
import AIFloatingButton from "./components/AIFloatingButton/AIFloatingButton"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton"
import Home from "./Pages/Home/Home"


function App() {
  

  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>

          
        </Routes>
      </main>
      <Footer/>
      <WhatsAppButton/>
      <AIFloatingButton/>
    </>
  )
}

export default App
