import '../styles/styles.css'
import { HashLink } from 'react-router-hash-link';
import {Link } from "react-router-dom";
import Reservations from './Reservations'
import Modal from './Modal'
import { useState } from "react";


function Nav() {
  const [showModal, setShowModal] = useState(false)
  const [showReservation, setShowReservation] = useState(false)
    return (
      <>
        <nav className='header-desktop'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><HashLink smooth to='/#about'>About</HashLink></li>
            <li><a href="#" aria-label="On Click" onClick={() => setShowModal(true)}>Menu</a>
            {showModal && <Modal closeModal={() => setShowModal(false)} />}</li>
            <li><a href="#" aria-label="On Click" onClick={() => setShowReservation(true)}>Reservations</a>
            {showReservation && <Reservations closeReservation={() => setShowReservation(false)} />}</li>
            <li><a href="#" aria-label="On Click" onClick={() => setShowModal(true)}>Order Online</a>
            {showModal && <Modal closeModal={() => setShowModal(false)} />}</li>
            <li><a href="#" aria-label="On Click" onClick={() => setShowModal(true)}>Login</a>
            {showModal && <Modal closeModal={() => setShowModal(false)} />}</li>
          </ul>
        </nav>
        <nav className='header-mobile'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><HashLink smooth to='/#about'>About</HashLink></li>
            <li><a href="#" aria-label="On Click" onClick={() => setShowModal(true)}>Menu</a>
            {showModal && <Modal closeModal={() => setShowModal(false)} />}</li>
            <li><a href="#" aria-label="On Click" onClick={() => setShowReservation(true)}>Reservations</a>
            {showReservation && <Reservations closeReservation={() => setShowReservation(false)} />}</li>
            <li><a href="#" aria-label="On Click" onClick={() => setShowModal(true)}>Order Online</a>
            {showModal && <Modal closeModal={() => setShowModal(false)} />}</li>
            <li><a href="#" aria-label="On Click" onClick={() => setShowModal(true)}>Login</a>
            {showModal && <Modal closeModal={() => setShowModal(false)} />}</li>
          </ul>
        </nav>
      </>
    );
  }
  
  export default Nav;