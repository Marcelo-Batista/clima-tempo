import { useState, useRef} from 'react'
import './App.css'
import axios from 'axios'
import WeatherInformations from './components/WeatherInformation/WeatherInformations'
import WeatherInformations5Days from './components/WeatherInformation5Days/WeatherInformations5Days'

function App() {
  const [data, setData] = useState()
  const [data5Days, setData5Days] = useState()

  const inputRef = useRef()

  async function searchCity(){
    const language = "pt_br"
    const units = "metric"
    const city = inputRef.current.value
    const key = "be1deb00bda94b4e92233ae191e36ab9"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=${language}&units=${units}`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=${language}&units=${units}`
 
    const responseData = await axios.get(url)
    const responseData5Days = await axios.get(url5Days)
    setData(responseData.data)
    setData5Days(responseData5Days.data)
    
  }

  return (
    <>
      <div className='container'>
        <h1>Previsão do Tempo</h1>
        <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'/>
        <button onClick={searchCity}>Buscar</button>

        {data && <WeatherInformations data={data}/>}
        {data5Days && <WeatherInformations5Days data5Days={data5Days}/>}
      </div>
    </>
  )
}

export default App
