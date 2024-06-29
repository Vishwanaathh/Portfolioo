import Nav from './Nav';
import './Education.css';
import pic from './WhatsAppImage.jpeg'; // Ensure the path is correct and the file exists

export default function Education() {
  return (
    <div>
      <Nav />
      <div style={{ display: 'flex' }}>
        <div>
          <h1>Education</h1>
          <h3>B.Tech Computer Science and Engineering</h3>
          <h5>Vellore Institute of Technology</h5>
          <h5>2023-2027</h5>

          <h3>CBSE HSC</h3>
          <h5>Chinmaya Vidyalaya</h5>
          <h5>2021-2023</h5>
          <h5>School Topper in Physics</h5>
        </div>
        <div>
          <img src={pic} alt="Education" /> {/* Ensure the image element is properly placed */}
        </div>
      </div>
    </div>
  );
}
