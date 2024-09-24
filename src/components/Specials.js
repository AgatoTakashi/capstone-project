import '../styles/styles.css';
import SpecialsCards from './SpecialsCards';
import greekSalad from '../images/greek-salad.svg';
import bruschetta from "../images/bruschetta.svg";
import lemonDessert from '../images/lemon-dessert.svg';
import { useState } from 'react';
import Modal from './Modal'

function Specials() {
  const [showModal, setShowModal] = useState(false)
  const specials = [
    {
        name: "Greek Salad",
        price: 12.99,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
        img: greekSalad
    },
    {
        name: "Bruschetta",
        price: 5.99,
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
        img: bruschetta
    },
    {
        name: "Lemon Dessert",
        price: 4.99,
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
        img: lemonDessert
    }
];
    return (
      <>
        <div className="specials-container">
          <div className='specials-heading flex'>
            <h2>Specials</h2>
            <button aria-label="On Click" onClick={() => setShowModal(true)}>Order Online</button>
            {showModal && <Modal closeModal={() => setShowModal(false)} />}
          </div>
          <div className='specials-cards flex'>
          {specials.map(specials => {
                            return (
                              <SpecialsCards specials={specials} />
                            )
                        })
                    }
          </div>
        </div>
      </>
    );
  }
  
  export default Specials;