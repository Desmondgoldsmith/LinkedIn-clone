import './App.css';
import Connect from './Components/LandingPage/Connect';
import Footer from './Components/LandingPage/Footer';
import Footersection from './Components/LandingPage/Footersection';
import Jobs from './Components/LandingPage/Jobs';
import Join from './Components/LandingPage/Join';
import Landingpage from './Components/LandingPage/Landingpage';
import Post from './Components/LandingPage/Post';
import Testimonals from './Components/LandingPage/Testimonals';
import Topics from './Components/LandingPage/Topics';
import Welcome from './Components/LandingPage/Welcome';
import Navbar from './Components/Main Page/Navbar';
import {BrowserRouter ,  Routes , Route} from "react-router-dom"
import Maincontent from './Components/Main Page/Maincontent';
import  { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
        <Route path="/home" element={
          <>
        <Landingpage />
      <Welcome />
      <Topics />
      <Jobs />
      <Post />
      <Testimonals />
      <Connect />
      <Join />
      <Footer />
      <Footersection />
      
      </>
      }
      />
 {/* Main page */}
 
    <Route path = "/main" element = {
      <>
        <Navbar />
      <Maincontent />
      <Toaster position='bottom-right'/>
      </>
      
    }/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
// npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material

