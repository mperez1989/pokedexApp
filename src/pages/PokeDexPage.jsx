import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokeDexPage/PokeCard"
import Select from "../components/PokeDexPage/Select"
import "../pages/style/pokeDexPage.css"
import Loader from "../components/PokeDexPage/Loader"

const PokeDexPage = () => {

  const [inputValue, setInputValue] = useState("")
  const [typeSelected, setTypeSelected] = useState("allPokemons")

  const trainer = useSelector(store => store.trainer)
  const inputSearch = useRef()

  const url = `https://pokeapi.co/api/v2/pokemon?limit=100`
  const [ pokemons, getPokemons, getTypePokemon, isLoading] = useFetch(url)

  useEffect(() => {
    if(typeSelected === "allPokemons") {
      getPokemons()


    } else {
      getTypePokemon(typeSelected)

    }
    

  }, [typeSelected])
  
  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))




  return (  
    <div className="pokedex_search_cotainer">
      <div className="pokedex-header-container"></div>
      <div className="pokedex-name"></div>
      <h1>Hi ¡{trainer}!</h1>
      <p>you can search you favourite pokemon</p>
      <form className="pokedex_search_form" onSubmit={handleSearch} action="">
        <input ref={inputSearch} type="text" placeholder="look for a pokemon" />
        <button>Search</button>
      </form>
      <Select
        setTypeSelected={setTypeSelected}
      />
      <div className="pokeCard-containe">
        {
          isLoading
            ? <Loader />
            : (
              pokeFiltered?.map( poke => (
                <PokeCard
                  key={poke.url}
                  url={poke.url}
                />
    
              ))
            )
        }
      </div>
    </div>
  )
}

export default PokeDexPage