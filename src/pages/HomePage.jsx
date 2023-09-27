import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "../pages/style/homePage.css"

const HomePage = () => {

  const inputTrainer = useRef()

  const dispach = useDispatch()

  const navigate = useNavigate()

  const handleTrainer = e => {
    e.preventDefault()
    dispach(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate("/pokedex")
  }

  return (
    <div className="pokedex_container">
      <h1 className="pokedex_text_intro">Pokedex App</h1>
      <span className="pokedex_img"></span>
      <h2 className="pokedex_text">¡Hi Trainer!</h2>
      <p className="pokedex_star">Give me...! your trainer name to star!</p>
      <form className="pokedex_form_container" onSubmit={handleTrainer} action="">
          <input ref={inputTrainer} type="text" placeholder="Trainer Name..."/>
          <button className="pokedex_btn">let´s star</button>
      </form>
      <span className="pokedex-footer__img"></span>
    </div>
  )
}

export default HomePage