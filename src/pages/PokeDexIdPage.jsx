import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import "./style/pokeDexIdPage.css"

const PokeDexIdPage = () => {

    const { id }= useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [ pokemon, getPokemon ] = useFetch(url)

    useEffect(()=>{
        getPokemon()
    },[id])
    console.log(pokemon)


  return (
    <div>
      <article className="pkecard__id">
        <header>
        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <span>#{pokemon?.order}</span>
        <h2>{pokemon?.name}</h2>
        <ul>
          <li>Weight<span>{pokemon?.weight}</span></li>
          <li>Height<span>{pokemon?.height}</span></li>
        </ul>
        <div>
        <h3>types</h3>
        <ul>
          {
            pokemon?.types.map(e => (
              <li key={e.type.url}>
                {
                  e.type.name
                }

              </li>
            ))
          }
        </ul>
        </div>
        <div>
          <h3>abilities</h3>
          <ul>
            {
              pokemon?.abilities.map(e => (
                <li key={e.ability.url}>
                  {
                    e.ability.name
                  }

                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h2>states</h2>
          <ul>
            {
              pokemon?.stats.map(e => (
                <li key={e.stat.url}>
                  <span>{e.stat.name}</span>
                  <span>{e.base_stat}/150</span>

                </li>
              ))
            }
          </ul>
        </div>  
    </article>
    <article>
      <h3>Moves</h3>
      <ul>
        {
          pokemon?.moves.map(e => (
            <li key={e.move.url}>
              <span>{e.move.name}</span>

            </li>
          ))
        }
      </ul>
    </article>
    </div>
    
        
    
  )
}

export default PokeDexIdPage