import { Link, NavLink,useParams } from 'react-router-dom';
function Contact() {
  const { id } = useParams();
    return<div> <h1>Welcome to the Contact Page</h1>
    
    <Link to="/about">About {id}</Link>
    <Link to="/search">SearchPage</Link>
<NavLink 
  to="/contact" 
  className={({ isActive }) => isActive ? "active" : ""}>
  Contact
  </NavLink>
    </div>;
  }
  export default Contact;