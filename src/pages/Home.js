import { Link, NavLink } from 'react-router-dom';
function Home() {

    return <div>
        
        <NavLink 
  to="/contact" 
  className={({ isActive }) => isActive ? "active" : ""}>
  Contact
  </NavLink>
         <h1>Welcome to the Home Page</h1></div>;
  }
  export default Home;