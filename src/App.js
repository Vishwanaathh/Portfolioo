import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Experience from './Experience';
import Certifications from './Certifications';
import Skills from './Skills';
import Education from './Education';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path='/Certifications' element={<Certifications/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Skills' element={<Skills/>}/>
      </Routes>
      </BrowserRouter>
</div>
  );
}

export default App;
