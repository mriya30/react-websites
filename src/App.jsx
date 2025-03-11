import Header from "./layout/Header"
import Footer from "./layout/Footer"

import Aos from "aos"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Form from "./pages/Form"
import OurTeam from "./pages/OurTeam"
import OurServices from "./pages/OurServices"


function App() {

  return (
    <>
  <Header/>
  <OurTeam/>
  <OurServices/>
  <Form/>
  <Footer/>
    </>
  )
}

export default App
