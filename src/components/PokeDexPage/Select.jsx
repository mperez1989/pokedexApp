import { useEffect, useRef, useState } from "react"
import useFetch from "../../hooks/useFetch"

const Select = ({ setTypeSelected }) => {

    
    const url = `https://pokeapi.co/api/v2/type`
    const [ types, getTypes] = useFetch(url)

    useEffect(()=>{
        getTypes()
    }, [])
    
    const handleChange = (e) => {
        setTypeSelected(e.target.value)

    }

  return (
    <div>
        <select className="select-container" onChange={handleChange} name="" id="">
            <option value="allPokemons">All Pokemons</option>
            {
                types?.results.map(typeInfo => (
                    <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
                ))
            }

        </select>
    </div>
  )
}

export default Select