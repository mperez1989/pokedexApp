
import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"

const PokeCard = ({ url }) => {

    const [pokemon, getPokemon]= useFetch(url)
    const navigate = useNavigate()
    
    useEffect(()=>{
        getPokemon()
    }, [])
    console.log(pokemon)

    const handleNavigate = () => {
        navigate(`/pokedex/${pokemon.id}`)

    }

    
  return (
    <article className="card_container" onClick={handleNavigate}>
        <header className="header_card_img">
            <img src={pokemon?.sprites.other[`official-artwork`].front_default} alt="" />
        </header>
        <section className="card_section_container">
            <h3>{pokemon?.name}</h3>
            <ul className="card_list_type">
                {
                    pokemon?.types.map((typeInfo)=>(
                        <li key={typeInfo.type.url}>/{typeInfo.type.name}/</li>
                    ))
                }
            </ul>
            <ul className="card_list_move">
                {
                    pokemon?.stats.map(statInfo => (
                        <li key={statInfo.stat.url} className="items">
                            <span className="card_move_name">{statInfo.stat.name}</span> <br />
                            <span className="card_move_num">{statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
  )
}

export default PokeCard