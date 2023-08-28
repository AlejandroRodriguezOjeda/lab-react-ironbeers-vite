import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function BeerDetailsPage() {

    const [beerDetails, setBeerDetails] = useState(null)
    const {beerId} = useParams()

    useEffect(()=>{
        getBeerDetails()
    },[beerId])

    const getBeerDetails = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            console.log(response);
            setBeerDetails(response.data)
        } catch (error) {
            console.log("i have found an error",error);
        }
    }

    
    
    if (beerDetails === null){
        return <h3>...Loading</h3>
    }

    return(
        <div className="single-beer">
           <img src={beerDetails.image_url} alt="image" width={150} />
           <h2>{beerDetails.name}  <span className="attenuation">{beerDetails.attenuation_level}</span></h2>
           <h4>{beerDetails.tagline}</h4>
           <p>{beerDetails.first_brewed}</p>
           
           <p>{beerDetails.description}</p>
           <br />
           <p>{beerDetails.contributed_by}</p>
                
        
        </div>
    )
}

export default BeerDetailsPage;
