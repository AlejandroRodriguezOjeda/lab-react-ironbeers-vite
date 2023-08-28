import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


function AddBeerPage() {
    const [name,setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [tips, setTips] = useState("")
    const [attenuation ,setAttenuation] = useState(0)
    const [contributor, setContributor] = useState("")
    
    const handleNameChange = (event) =>{
        setName(event.target.value)
    }
    const handleTaglineChange = (event) =>{
        setTagline(event.target.value)
    }
    const handleDescriptionChange = (event) =>{
    setDescription(event.target.value)
    }
    const handleDateChange = (event) =>{
        setDate(event.target.value)
    }
    const handleTipChange = (event) =>{
        setTips(event.target.value)
    }
    const handleAttenuationChange = (event) =>{
        setAttenuation(event.target.value)
    }
    const handleContributorChange = (event) =>{
        setContributor(event.target.value)
    }

    const handleCreateBeer = async (event) =>{
        event.preventDefault()

        try {
            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new",{
                name:name,
                tagline:tagline,
                description:description,
                date:date,
                tips:tips,
                attenuation:attenuation,
                contributor:contributor
            })

            Navigate("/beers")
        } catch (error) {
            console.log(error);
        }
    }

return(
    <div>
        <h1>Add a Beer!</h1>

        <form >

        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={handleNameChange}/>

        <br />
         
          <label htmlFor="tagline">Tagline:</label>
         <input type="text" tagline="tagline" value={tagline} onChange={handleTaglineChange}/>

        <br />

        <label htmlFor="description">Description:</label>
        <input type="text" description="description" value={description} onChange={handleDescriptionChange}/>

        <br />


        <label htmlFor="date">Date:</label>
        <input type="text" date="date" value={date} onChange={handleDateChange}/>

        <br />


        <label htmlFor="tips">Brewer tip:</label>
        <input type="text" tip="tips" value={tips} onChange={handleTipChange}/>

        <br />


        <label htmlFor="attenuation">Attenuation:</label>
        <input type="number" attenuation="attenuation" value={attenuation} onChange={handleAttenuationChange}/>

        <br />


        <label htmlFor="contributor">Contributor</label>
        <input type="text" contributor="contributor" value={contributor} onChange={handleContributorChange}/>

        <br />

        <button onClick={handleCreateBeer}>Add beer!</button>
        





        </form>
    </div>
)

}

export default AddBeerPage;
