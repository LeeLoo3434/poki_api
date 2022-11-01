import React, { useState } from 'react'
import axios from 'axios'

const Poke = () => {
    const [pokeList, setPokeList]= useState([])
    const[errResponse, setErrResponse]= useState("")

    const makeAPICall = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=804")
            .then(res => {
                console.log(res.data)
                const {results} = res.data
                console.log(res.data)
                setPokeList(results)
            }) // SUCCESSFUL RESPONSE
            .catch(error => setErrResponse("Oooops something went wrong")) // UNSUCCESSFUL RESPONSE
    }





    return (
        <>
        <button onClick={makeAPICall}>Fetch Pokemon</button>
        {errResponse ? <p>{errResponse}</p> : null}
        {
            pokeList.map((poke) => <p>{poke.name}</p>)
        }
        </>
    )
}

export default Poke