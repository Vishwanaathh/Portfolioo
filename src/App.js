import './App.css';
import Home from './Home';
import {Routes,Route} from "react-router-dom";
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import Skills from './pages/skill/Skills';
import Certifications from "./pages/cerification/Certifications"
import Nav from './components/navbar/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path='/certifications' element={<Certifications/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
</div>
  );
}

export default App;
