import './Education.css';
import pic from './WhatsApp Image 2024-06-29 at 3.22.41 PM.jpeg';

export default function Education() {
    return (
        <div className='main3'>
            <div className='header'>
                <h1>Education</h1>
            </div>
            <div className='expo2'>
                
                <div className='box1'>
                    <span className='subHead'>BTech</span>
                    <ul>
                        <li>Vellore Institute of Technology</li>
                        <li>Computer Science and Engineering</li>
                        <li>Duration : 2023-2027</li>
                    </ul>
                    <span className='subHead'>CBSE HSC</span>
                    <ul>
                        <li>Chinmaya Vidyalaya</li>
                        <li>Duration: 2021-2023</li>
                        <li>Achievement: School Topper in Physics</li>
                    </ul>
                </div>
                <div className='img4'>
                    <img src={pic} className='imgEd' alt='Education'></img>
                </div>
            </div>
        </div>
    );
}
