import { useState } from "react";
import './Contact.css';
import { motion } from 'framer-motion';

export default function Contact() {
    const [isInterestsVisible, setInterestsVisible] = useState(false);
    const [isContactVisible, setContactVisible] = useState(false);
    const [isSkillsVisible, setSkillsVisible] = useState(false);

    const toggleVisibility = (setter) => {
        setter(prev => !prev);
    };

    return (
        <div id="contact">
            <motion.div animate={{ opacity: 1 }} className="box">
                <div className="vjs">
                <h1>Interests</h1>
                <button onClick={() => toggleVisibility(setInterestsVisible)}> ▼</button>

                </div>
                {isInterestsVisible && (
                    <ul className="interests">
                        <li className="new"><h3 id="info">I am interested in building fast, scalable, user-friendly web apps</h3></li>
                        <li className="new"><h3 id="info">I can demonstrate skills in management and leadership</h3></li>
                        <li className="new"><h3 id="info">I have a passion for teaching</h3></li>
                    </ul>
                )}
            </motion.div>
            <motion.div animate={{ opacity: 1 }} className="box">
                <div className="vjs">
                <h1 id="head">Contact Info</h1>
                <button onClick={() => toggleVisibility(setContactVisible)}>▼</button>
                </div>
                    
                {isContactVisible && (
                    <ul className="contact-info">
                        <li className="new">Email: vishwanaathh4@gmail.com</li>
                        <li className="new">City: Hyderabad</li>
                    </ul>
                )}
            </motion.div>
            <motion.div animate={{ opacity: 1 }} className="box">
                <div className="vjs">
                <h1>Other Skills</h1>
                <button onClick={() => toggleVisibility(setSkillsVisible)}>▼</button>
                </div>
                {isSkillsVisible && (
                    <ul className="skills">
                        <li className="new"><h3 id="info">Python: I am skilled in building ML and DL models in Python</h3></li>
                        <li className="new"><h3 id="info">C++: I am skilled in solving DSA problems using C++</h3></li>
                        <li className="new"><h3 id="info">I am skilled in using JavaScript and Java to build web apps</h3></li>
                    </ul>
                )}
            </motion.div>
        </div>
    );
}
