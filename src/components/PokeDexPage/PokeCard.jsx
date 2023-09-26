
import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import "../PokeDexPage/style/PokeCard.css"

const PokeCard = ({ url }) => {

    const [pokemon, getPokemon]= useFetch(url)
    const navigate = useNavigate()
    
    useEffect(()=>{
        getPokemon()
    }, [])

    const handleNavigate = () => {
        navigate(`/pokedex/${pokemon.id}`)

    }

    
  return (
    <article className="card_container" onClick={handleNavigate}>
        <header className="header_card_img">
            <img src={pokemon?.sprites.other[`official-artwork`].front_default} alt="" />
        </header>
        <section>
            <h3>{pokemon?.name}</h3>
            <ul>
                {
                    pokemon?.types.map((typeInfo)=>(
                        <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            </ul>
            <ul>
                {
                    pokemon?.stats.map(statInfo => (
                        <li key={statInfo.stat.url}>
                            <span>{statInfo.stat.name}</span>
                            <span>{statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard