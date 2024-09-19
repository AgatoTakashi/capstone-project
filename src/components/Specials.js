import '../styles/styles.css';
import SpecialsCards from './SpecialsCards';

function Specials() {
    return (
      <>
        <div className="specials-container">
          <div className='specials-heading flex'>
            <h2>Specials</h2>
            <button>Order Online</button>
          </div>
          <div className='specials-cards'>
            <SpecialsCards></SpecialsCards>
          </div>
        </div>
      </>
    );
  }
  
  export default Specials;