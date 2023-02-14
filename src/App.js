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
import {BrowserRouter ,  Routes , Route} from "react-router-dom"
import Maincontent from './Components/Main Page/Maincontent';
import  { Toaster } from 'react-hot-toast';
import Login from './Components/LoginPage/Login';
import { useSelector } from 'react-redux';
import {selectUser} from './App/Slice/userSlice'



function App() {
  const user = useSelector(selectUser)
  return(
    <div className="App">
    {/* basically saying here that if no user exist in the redux store (nobody logged in), show the login page else show the main page */}
  {!user ? <Login/> : <Maincontent />}
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
    
      <Maincontent />
      <Toaster position='bottom-right'/>
      </>
      
    }/>

{/* login page */}
   <Route path = "/login" element = {
    <>
      <Login/>
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

