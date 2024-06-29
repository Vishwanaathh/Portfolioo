import { useState } from "react";
import './Contact.css';
import { motion } from 'framer-motion';

export default function Contact() {
    const [flag, setFlag] = useState(false);
    const [flagg, setFlagg] = useState(false);
    const [slide,setSlide]=useState(false); // Initialize flag as false (boolean)
    
    const toggle = () => {
        setFlag(!flag); // Toggle flag between true and false
    };
    const togglee=()=>{
        setFlagg(!flagg);
    }
    const toggleee=()=>{
        setSlide(!slide);
    }

    const stylee = {
     // Conditional opacity based on flag state
     opacity:flag?1:0,
     

     transition:'opacity 2s ease'
    };
    const styleeee={
        opacity:slide?1:0,
        transition:'opacity 2s ease',
        transform:'translate(1%)'
    }
    const styleee = {
        // Conditional opacity based on flag state
        opacity:flagg?1:0,
        transition:'opacity 2s ease'
       };
       

    return (
        <div animate={{opacity:1}} id="contact">
            <div class="box1">
                <h1>Interests</h1>
            <button onClick={toggleee}>Click here for Viewing my Interests</button>
            {(<ul style={styleeee}>
                <li class="new"><h3 id="info">I am interested in building fast,scalable,user friendly web apps </h3></li>
                <li class="new"><h3 id="info">I can demonstrate skills in management and leadership</h3></li>
                <li class="new"><h3 id="info">I have a passion for teaching</h3></li>
            </ul>)}
            </div>
            <div class="box1">
            <h1 id="head">Contact Info</h1>
            <button onClick={toggle}>Click here for Contact info</button>
          {(<ul style={stylee}>
                <li class="new">Email: vishwanaathh4@gmail.com</li>
                <li class="new">City: Hyderabad</li>
            </ul>)}
            </div>
            <div class="box1">
                <h1>Other skills</h1>
            <button onClick={togglee}>Click here for Other Skills</button>
            {(<ul style={styleee}>
                <li class="new" ><h3 id="info">Python: I am skilled in building ML and DL Models in python</h3> </li>
                <li class="new"><h3 id="info">C++: I am skilled in solving DSA problems using C++</h3></li>
                <li class="new"><h3 id="info">I am skilled in using Javascript and Java to build Web Apps.</h3></li>
            </ul>)}
            </div>
            <div>



            </div>
        
        </div>
    );
}
