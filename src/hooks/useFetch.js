import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

  const [infoApi, setInfoApi] = useState()
  const [isLoading, setIsLoading] = useState(true)


  const getApi = () => {
    setIsLoading(true)
    axios.get(url)
        .then(res => {
          setInfoApi(res.data)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => setIsLoading(false))
      
  }

  const getTypeApi = (urlType) => {
    axios.get(urlType)
        .then(res => {
          res.data
          const obj = {
            results: res.data.pokemon.map( e => e.pokemon)
          }
          setInfoApi(obj)
        })
        .catch(err => console.log(err))
  }

  return [infoApi, getApi, getTypeApi, isLoading] 
}

export default useFetch