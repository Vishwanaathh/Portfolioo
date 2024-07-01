import Nav from './Nav';
import {useState} from "react";
import './Skills.css';
import skills from './Screenshot 2024-06-30 212641.png';
import python from './Python-Symbol.png';
import javascript from './Javascript.png';
import reactlogo from './react.png';
import nodejs from './nodejs.png';
import mongodb from './MongoDB.png';
import cpp from './cpp.png';
import sql from './Mysql.png';
import java from './java.png';
import springboot from './springboot.png';
import Docker from './dockerlogo.png';
export default function Skills(){
    const [flag,setFlag]=useState(false)
    const show=()=>{
        setFlag(!flag)

    }
    const [flagg,setFlagg]=useState(false);
    const showw=()=>{
        setFlagg(!flagg);
    }
    const [flaggg,setFlaggg]=useState(false);
    const showww=()=>{
        setFlaggg(!flaggg);
    }
    const [flagggg,setFlagggg]=useState(false);
    const showwww=()=>{
        setFlagggg(!flagggg);
    }
    const [flaggggg,setFlaggggg]=useState(false);
    const showwwww=()=>{
        setFlaggggg(!flaggggg);
    }
    const [flagggggg,setFlagggggg]=useState(false);
    const showwwwww=()=>{
        setFlagggggg(!flagggggg);
    }
    return(<div><Nav/>
    <h1>Skills</h1>
    
    <div id="listtt">
    <ul><li id="lii"><h3 onMouseEnter={show} onMouseLeave={show}><img id="python" src={python}/></h3>{flag&&(<div>I am extremely skilled at this! I can build Web apps and ML Models..</div>)}</li>
    <li id="lii"><h3 onMouseEnter={showw} onMouseLeave={showw}><img id="python" src={cpp}/></h3> {flagg&&(<div>I am extremely skilled at this! I can solve DSA Problems</div>)}</li>
    <li id="lii"><h3 onMouseEnter={showww} onMouseLeave={showww}><img id="python" src={javascript}/></h3>{flaggg&&(<div>I am Extremely skilled at this.I can build Web Apps and CLI Tools</div>)}</li>
    <li id="lii"><h3 onMouseEnter={showwww} onMouseLeave={showwww}><img id="reactt" src={reactlogo}/></h3>{flagggg&&(<div>I am skilled at this.I can build Web Apps</div>)}</li>
    <li id="lii"><h3 onMouseEnter={showwwww} onMouseLeave={showwwww}><img id="python" src={nodejs}/></h3>{flaggggg&&(<div>I am skilled at this.I can build Web Apps and use ExpressJs</div>)}</li>
    <li id="lii"><h3 onMouseEnter={showwwwww} onMouseLeave={showwwwww}><img id="python" src={mongodb}/></h3>{flagggggg&&(<div>I am skilled at this.I can build Web Apps and use mongoose</div>)}</li>
    <li id="lii"><h3><img id="python" src={sql}/></h3></li>
    <li id="lii"><h3><img id="python" src={java}/></h3></li>
    <li id="lii"><h3><img id="springboot" src={springboot}/></h3></li>
    <li id="lii"><h3><img id="python" src={Docker}/></h3></li>
    <li id="lii"><h3>Git</h3></li>
    <li id="lii"><h3>Github</h3></li>
    

    </ul>
    </div>
    
    
    </div>)
}
