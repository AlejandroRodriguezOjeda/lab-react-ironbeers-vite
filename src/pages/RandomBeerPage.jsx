import axios from "axios";
import React, { useEffect, useState } from "react";



function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(()=>{
        getRandomBeer()
    },[])

    const getRandomBeer = async () => {
       try{
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        setRandomBeer(response.data)
       }catch(error){
        console.log(error);
       }
    }
    if (randomBeer === null){
        return <h3>...Loading</h3>
    }


    return(
        <div className="single-beer">
           <img src={randomBeer.image_url} alt="image" width={150} />
           <h2>{randomBeer.name}  <span className="attenuation">{randomBeer.attenuation_level}</span></h2>
           <h4>{randomBeer.tagline}</h4>
           <p>{randomBeer.first_brewed}</p>
           
           <p>{randomBeer.description}</p>
           <br />
           <p>{randomBeer.contributed_by}</p>
                
        
        </div>
    )
}

export default RandomBeersPage;
