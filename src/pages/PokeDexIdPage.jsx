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
    
    const typeColor = pokemon?.types[0].type.name;


  return (
    <div className="pokecard__id__container">
      <article className={`pkecard__id ${typeColor}-border`}>
        <header className={`pokecard__id__header ${typeColor}-gradient`}>
        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <section className="pokecard__id__body">
          <h4 className="pokecard__id__order">#{pokemon?.order}</h4>
          <h2 className="pokecard__id__name">{pokemon?.name}</h2>
          <ul className="pokecard__id__zise">
            <li>Weight <br /><span>{pokemon?.weight}</span></li>
            <li>Height <br /><span>{pokemon?.height}</span></li>
          </ul>
          <div className="pkecard__id__types__abilities">
            <div>
              <h3>types</h3>
              <ul>
              {
                pokemon?.types.map(e => (
                <li key={e.type.url} className={`pokecard__id__type ${typeColor}-background `}>
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
                  <li key={e.ability.url} className="pokecard__id__ability">
                    {
                      e.ability.name
                    }

                  </li>
                ))
              }
            </ul>
            </div>
            </div>
          <div className="pokecard__id__states">
            <h2>states</h2>
            <ul>
              {
                pokemon?.stats.map(e => (
                  <li key={e.stat.url}>
                    <h4 className="pokecard__id_stat_name">{e.stat.name}</h4>
                    <span className="pokecard__id_stat">{e.base_stat}/150</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
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