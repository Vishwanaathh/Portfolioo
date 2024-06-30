import { useState } from "react";
import './Contact.css';

export default function Contact() {
    const [flag, setFlag] = useState(false);
    const [flagg, setFlagg] = useState(false);
    const [slide, setSlide] = useState(false);

    const toggle = () => {
        setFlag(!flag);
    };

    const togglee = () => {
        setFlagg(!flagg);
    };

    const toggleee = () => {
        setSlide(!slide);
    };

    const styleeee = {
        transition: 'opacity 2s ease',
        transform: 'translate(1%)'
    };

    const stylee = {
        transition: 'opacity 2s ease'
    };

    return (
        <div id="contact">
            <div className="box1">
                <h1 id="Interests">Interests</h1>
                <button onClick={toggleee} id="InterestsB">Click here to View my Interests</button>
                {slide && (
                    <ul style={styleeee} id="first">
                        <li className="new"><h3 id="info">I am interested in building fast, scalable, user-friendly web apps</h3></li>
                        <li className="new"><h3 id="info">I can demonstrate skills in management and leadership</h3></li>
                        <li className="new"><h3 id="info">I have a passion for teaching</h3></li>
                    </ul>
                )}
            </div>
            <div className="box1">
                <h1 id="Cinfo">Contact Info</h1>
                <button onClick={toggle} id="CinfoB">Click here to view Contact info</button>
                {flag && (
                    <ul style={stylee} id="second">
                        <li className="new">Email: vishwanaathh4@gmail.com</li>
                        <li className="new">City: Hyderabad</li>
                    </ul>
                )}
            </div>
            <div className="box1">
                <h1 id="Oskills">Other skills</h1>
                <button onClick={togglee} id="OskillsB">Click To View My Other Skills</button>
                {flagg && (
                    <ul style={stylee} id="third">
                        <li className="new"><h3 id="info">Python: I am skilled in building ML and DL Models in Python</h3></li>
                        <li className="new"><h3 id="info">C++: I am skilled in solving DSA problems using C++</h3></li>
                        <li className="new"><h3 id="info">I am skilled in using JavaScript and Java to build Web Apps.</h3></li>
                    </ul>
                )}
            </div>
        </div>
    );
}
