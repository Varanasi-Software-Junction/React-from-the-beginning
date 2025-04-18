import { Link, NavLink } from 'react-router-dom';
function Contact() {
    return<div> <h1>Welcome to the Contact Page</h1>
    
    <Link to="/about">About</Link>
<NavLink 
  to="/contact" 
  className={({ isActive }) => isActive ? "active" : ""}>
  Contact
  </NavLink>
    </div>;
  }
  export default Contact;