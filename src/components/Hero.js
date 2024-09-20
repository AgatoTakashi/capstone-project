import heroImage from '../images/restauranfood.jpg'
import '../styles/styles.css'
import Reservations from './Reservations'
import { useState } from "react";

function Hero() {
  const [showReservation, setShowReservation] = useState(false)
    return (
      <>
        <div className="hero-container flex">
          <div>
            <h1>Little Lemon</h1> 
            <h2>Chicago</h2>
            <p>Velit mollit id cupidatat enim incididunt tempor eiusmod velit ex cillum nostrud non. Aute laborum non est aliqua consequat consectetur reprehenderit incididunt esse mollit. In voluptate qui tempor cupidatat adipisicing laboris aliqua irure ullamco.</p>
            <br />
            <button onClick={() => setShowReservation(true)}>Reserve a table</button>
            {showReservation && <Reservations closeReservation={() => setShowReservation(false)} />}
          </div>
          <div className="hero-image-card">
            <img src={heroImage} alt="Hero" className='round1'/>
            
          </div>
        </div>
      </>
    );
  }
  
  export default Hero;