
import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import "./styles/pokeCard.css"

const PokeCard = ({ url}) => {

    const [pokemon, getPokemon]= useFetch(url)
    const navigate = useNavigate()
    
    useEffect(()=>{
        getPokemon()
    }, [])

    const handleNavigate = () => {
        navigate(`/pokedex/${pokemon.id}`)

    }

    const type = pokemon?.types[0].type.name;

    
  return (
    <article className={`pokecard ${type}-border`} onClick={handleNavigate}>
        <header className={`pokecard__header ${type}-gradient`}>
            <img className="pokecard__image" src={pokemon?.sprites.other[`official-artwork`].front_default} alt="" />
        </header>
        <section className="pokecard__body">
            <h3 className={`pokecard__name ${type}-color`}>{pokemon?.name}</h3>
            <ul className="pokecard__types">
                {
                    pokemon?.types.map((typeInfo)=>(
                        <li className="pokecard__typename" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            </ul>
            <hr className="pokecard__hr" />
            <ul className="pokecard__stats">
                {
                    pokemon?.stats.map(statInfo => (
                        <li key={statInfo.stat.url} className="pokecard__stat">
                            <h4 className="pokecard__stat__name">{statInfo.stat.name}</h4>
                            <span className={`pokecard__stat__value ${type}-num`}>{statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>

        )
  
}

export default PokeCard