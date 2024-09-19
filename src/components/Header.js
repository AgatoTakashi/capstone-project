import '../styles/styles.css';
import Nav from "./Nav";
import headerLogo from '../images/Logo.svg'

function Header() {
    return (
      <>
        <header>
          <div className="header-container flex">
            <img src={headerLogo} alt="Little Lemon header logo" />
            <Nav />
          </div>
        </header>
      </>
    );
  }
  
  export default Header;