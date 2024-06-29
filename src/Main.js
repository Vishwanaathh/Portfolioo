import './Main.css'
import {useEffect} from "react";
import pfp from './WhatsApp Image 2024-06-29 at 12.25.12 PM.jpeg';
import logo from './logo.png';
export default function Main(){
    useEffect(()=>{
        const elem=document.getElementById("mainb");
        elem.classList.add("info")
        elem.classList.add("imgg")

    },[])
    return(
        <div id="mainb">
            
            <div id="msgb">
            <h1 id="about">About Me...</h1>
           
            <h3 id="info">I am a full stack developer, Proficient in technologies such as Reactjs,Nodejs,MongoDb,Expressjs,SQL, Spring-Boot,Python,Linux
                . I am based in Hyderabad.
            </h3>
        <img src={pfp} id="imgg"/>
            
            </div>
        </div>
    )
}
