import { Link } from "react-router-dom";
import background from "../img/000-404.png";


export default function NotFound() {
  return (

      <div className="container-fluid py-5 bg-light w-100  vh-100" >
        <div className="row text-center">
          <img className="img-fluid" src={background} />
          <h1>Oops! You seem to be lost.</h1>
          <p>Here are some helpful links:</p>
          <Link to="/">Home</Link>
        </div>
      </div> 
    
  );
}
