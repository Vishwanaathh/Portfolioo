import { Link } from 'react-router-dom';
import './Nav.css';
import { useState } from 'react';
import menuBar from './menuBar.jpg';

export default function Nav() {
    const [flag, setFlag] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);

    let toggle = () => {
        setFlag(!flag);
    }

    const toggleProjects = () => {
        setProjectsOpen(!projectsOpen);
    }


    return (
        <>
            <div className='nav'>
                <div className='logo'>
                    <span><Link to="/">YSP</Link></span>
                    <button className='toggleButton' onClick={toggle}>
                    <img className="menuImg" src={menuBar} alt="Menu" />
                </button>
                </div>
                <div className={`navLinks ${flag ? 'active' : ''}`}>
                    <ul>
                        <Link to="/education">
                            <li className='navSub-links'>Education</li>
                        </Link>
                        <Link to="/experience">
                            <li className='navSub-links'>Experience</li>
                        </Link>
                        <Link to="/skills">
                            <li className='navSub-links'>Skills</li>
                        </Link>
                        <Link to="/certifications">
                            <li className='navSub-links'>Certifications</li>
                        </Link>
                        <li className='navSub-links' onClick={toggleProjects}>
                            Projects
                            {projectsOpen && (
                                <ul className='dropdown'>
                                    <Link to="https://github.com/Vishwanaathh/ping" target='_blank'>
                                        <li className='dropdown-item'>Pingitt</li>
                                    </Link>
                                    <Link to="https://github.com/Vishwanaathh/Citiess.com" target='_blank'>
                                        <li className='dropdown-item'>Citiess</li>
                                    </Link>
                                    <Link to="https://github.com/Vishwanaathh/Lung_Cancer_Prediction" target='_blank'>
                                        <li className='dropdown-item'>Lung Cancer Prediction</li>
                                    </Link>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
