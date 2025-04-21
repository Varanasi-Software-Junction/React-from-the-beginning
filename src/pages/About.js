import { useLocation  } from "react-router-dom";
function About() {
  const{id}=useLocation ();
  useLocation 
    return <h1>Welcome to the About Page {id}</h1>;
  }
  export default About;