import {  NavLink, useParams } from 'react-router-dom';
function UserProfile() {
  const { id } = useParams();
  return <div> <h1>Welcome to the UserProfile Page</h1>

 
    <h2>Viewing profile of user: {id}</h2>;
    <NavLink
      to="/contact"
      className={({ isActive }) => isActive ? "active" : ""}>
      Contact
    </NavLink>
  </div>;
}
export default UserProfile;