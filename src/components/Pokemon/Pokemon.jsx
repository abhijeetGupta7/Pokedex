import { Link } from "react-router-dom";
import "./Pokemon.css";

function Pokemon(props) {
    return (
        <>
            <div className="pokemon">

                <Link className="pokemon-link" to={`/pokemon/${props.id}`}>
                <div className="pokemon-name" onClick={() => console.log(props.id) }> 
                    {props.name}
                </div>

                <img className="pokemon-image" src={props.image} alt={props.name} />
                </Link>
                
            </div>
            
        </>
    )
}

export default Pokemon;