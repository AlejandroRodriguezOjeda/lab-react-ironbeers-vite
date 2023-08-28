import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"




function AllBeersPage() {
    const [ beers, setAllBeers] = useState(null)



    useEffect(()=>{
        getBeers()
    },[])

    const getBeers = async () => {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            console.log(response);
            setAllBeers(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    if (beers === null){
        return <h3>...Loading</h3>
    }
    return(
        <div className="beerlist">
            {beers.map((eachBeer)=>{
                return(
                    <li key={eachBeer._id} className="beerBox">
                        <img src={eachBeer.image_url} width={90} />
                        <div className="beerInfo">
                       <Link to={`/beers/${eachBeer._id}`}>
                        <h3>{eachBeer.name}.</h3>
                        </Link>
                        <h4>{eachBeer.tagline}</h4>
                        <p>{eachBeer.contributed_by}</p>
                        </div>
                     </li>
                  
                )
            })}
        </div>
    )
}

export default AllBeersPage;
