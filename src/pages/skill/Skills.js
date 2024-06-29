import {useState} from "react";
import './Skills.css';
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
    return(<div>


    <h1>Skills</h1>
    <div id="listtt">
    <ul><li id="lii"><h3 onMouseEnter={show} onMouseLeave={show}>Python</h3> {flag&&(<div>I am extremely skilled at this! I can build Web apps and ML Models..</div>)}</li>
    <li id="lii"><h3 onMouseEnter={showw} onMouseLeave={showw}>C++</h3> {flagg&&(<div>I am extremely skilled at this! I can solve DSA Problems</div>)}</li>
    <li id="lii"><h3 onMouseEnter={showww} onMouseLeave={showww}>Javascript</h3>{flaggg&&(<div>I am Extremely skilled at this.I can build Web Apps and CLI Tools</div>)}</li>
    <li id="lii"><h3 onMouseEnter={showwww} onMouseLeave={showwww}>Reactjs</h3>{flagggg&&(<div>I am skilled at this.I can build Web Apps</div>)}</li>
    <li id="lii"><h3 onMouseEnter={showwwww} onMouseLeave={showwwww}>Nodejs</h3>{flaggggg&&(<div>I am skilled at this.I can build Web Apps and use ExpressJs</div>)}</li>
    <li id="lii"><h3 onMouseEnter={showwwwww} onMouseLeave={showwwwww}>MongoDb</h3>{flagggggg&&(<div>I am skilled at this.I can build Web Apps and use mongoose</div>)}</li>
    <li id="lii"><h3>SQL</h3></li>
    <li id="lii"><h3>Java</h3></li>
    <li id="lii"><h3>Spring-Boot</h3></li>
    <li id="lii"><h3>Docker</h3></li>
    <li id="lii"><h3>Git</h3></li>
    <li id="lii"><h3>Github</h3></li>
    

    </ul>
    </div>
    
    
    </div>)
}