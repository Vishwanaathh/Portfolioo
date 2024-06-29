import './Main.css';
import pfp from './WhatsApp Image 2024-06-29 at 12.25.12 PM.jpeg';

export default function Main() {
    return (
        <div className='main'>
            <div className='img'>
                <img src={pfp} alt='Profile' />
            </div>
            <div className='about_me'>
                <p>About Me</p>
                <span>
                    Hi, myself Yadavalli Vishwanath Parshuram, 2nd Year Btech CSE from VIT.
                    I am a full stack developer, proficient in technologies such as MERN stack, SQL, Spring-Boot, Python, and Linux. I am based in Hyderabad.
                </span>
            </div>
        </div>
    );
}
