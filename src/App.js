import './App.css';
import Landingpage from './Components/LandingPage/Landingpage';
import Topics from './Components/LandingPage/Topics';
import Welcome from './Components/LandingPage/Welcome';

function App() {
  return (
    <div className="App">
      <Landingpage />
      <Welcome />
      <Topics />
    </div>
  );
}

export default App;
// npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material

