import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCoffee , faHandPointer } from '@fortawesome/free-solid-svg-icons' ;
import './Characters.css' ;
const Characters = (props) => {
    // console.log(props)
    const {name, country , img , salary , game} = props.character ;
    const element = <FontAwesomeIcon icon={faHandPointer} />
 
    return (
        <div className="col-md-4">
            <div className="character-cart shadow-lg">
               <div className="character-img">
               <img className="img-fluid" src={img} alt="" />
               </div>
                <h4> Name : <small>{name}</small> </h4>
                <h4> Game from : <small> {game}</small> </h4>
                <h4> Country : <small>{country}</small> </h4>
                <h4> Salary :<small> $ {salary}</small> </h4>
                <button onClick={() => props.handleAddToCart(props.character)} className="btn btn-danger"> <small className="me-2">  {element}  </small> Select Character </button>

            </div>
        </div>
    );
};

export default Characters;