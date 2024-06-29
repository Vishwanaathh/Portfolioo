import './Nav.css';
import {useState} from "react";
export default function Nav(){
    const [flag,setFlag]=useState(false);
    const toggle=()=>{
        setFlag(!flag);
    }

    return(
        <div id="main"><h1><a href='https://portfolioo-1z7t62id6-vishwanaathhs-projects.vercel.app/' id="tagg">Yadavalli Viswanath Parashuram</a></h1>
        <ul id="list">
            <li><a href='https://portfolioo-1z7t62id6-vishwanaathhs-projects.vercel.app/Education'>Education</a></li>
            <li><a href='https://portfolioo-1z7t62id6-vishwanaathhs-projects.vercel.app/Skills'>Skills</a></li>
            <li><a href='https://portfolioo-1z7t62id6-vishwanaathhs-projects.vercel.app/Certifications'>Certifications</a></li>
            <li><a href='https://portfolioo-1z7t62id6-vishwanaathhs-projects.vercel.app/Experience'>Experience</a></li>
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
