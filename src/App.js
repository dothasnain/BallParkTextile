import './App.css';
import './assets/js/main'
import './assets/css/style.css'
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Comment from './Components/Comment/Comment';
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Customer' element={<Comment/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>

    <Footer/>


    
    </>
  );
}

export default App;
