import footerLogo from '../images/footerlogo.png';

function Footer() {
    return (
      <>
        <footer>
          <div className="footer-container flex">
            <img src={footerLogo} alt="Little Lemon footer Logo" className='footer-logo' />
            <div className="footer-links">
              <h4>Navigation</h4>
              <br />
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contact</h4>
              <br />
              <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Socials</h4>
              <br />
              <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;