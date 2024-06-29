import './Nav.css';
import {useState} from "react";
export default function Nav(){
    const [flag,setFlag]=useState(false);
    const toggle=()=>{
        setFlag(!flag);
    }

    return(
        <div id="main"><h1><a href='https://portfolioo-cx0nz822j-vishwanaathhs-projects.vercel.app/Education' id="tagg">Yadavalli Viswanath Parashuram</a></h1>
        <ul id="list">
            <li><a href='http://localhost:3001/Education'>Education</a></li>
            <li><a href='http://localhost:3001/Skills'>Skills</a></li>
            <li><a href='http://localhost:3001/Certifications'>Certifications</a></li>
            <li><a href='http://localhost:3001/Experience'>Experience</a></li>
            <li onClick={toggle}>Projects</li>

            </ul>
            {flag&&(
                <div id="drop">
                    <ul><li><a href='https://github.com/Vishwanaathh/ping'>PingIt!</a></li>
                    <li><a href='https://github.com/Vishwanaathh/Citiess.com'>Citieess</a></li>
                    <li><a href='https://github.com/Vishwanaathh/Lung_Cancer_Prediction'>LungCancerPrediction</a></li>
                    </ul>
                    </div>
            )

            }
            </div>
    )
}
