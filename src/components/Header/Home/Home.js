
import { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Name from '../../Name/Name';
import Characters from '../Characters/Characters';
import './Home.css' ;
const Home = (props) => {

    const [characters, setCharacters] = useState([])
    const [cart , setCart] = useState([])

    useEffect( ()=> {
        fetch('./fakedata.JSON')
        .then(res=>res.json())
        .then(data => setCharacters(data))
    } , []);

    
    

    const handleAddToCart = (char) => {
        const newCart = [...cart, char] ;
        setCart(newCart) ;
        
    }
    
   

    return (
        <div>
            <div className="row">
                <div className="col-md-9 left-cards">
                    <div className="row">
                        {
                            characters.map(character => <Characters 
                                handleAddToCart={handleAddToCart}
                                key={character.name}
                                 character={character}></Characters>)
                        }
                    </div>

                </div>
                <div className="col-md-3">
                         
                        <Cart cart={cart}></Cart>
                        <Name handleAddToCart={handleAddToCart} Name={props.name}> </Name>
                </div>
            </div>
        </div>
    );
};

export default Home;