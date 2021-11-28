import React, { useEffect, useState } from 'react';
import './Name.css' ;

const Name = (props) => {
    // console.log(props)
    const [characters, setCharacters] = useState([])
    useEffect( () => {

        fetch('./fakedata.JSON')
        .then(res => res.json())
        .then (data => setCharacters(data))
    }, [])
    return (
        <div>
            {
                characters.map(character => console.log(character.name))
            }

            
        </div>
    );
};

export default Name;