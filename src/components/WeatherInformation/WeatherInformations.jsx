import './WeatherInformations.css'
function WeatherInformations({ data}){
    console.log(data)
    const date = new Date(data.dt * 1000)

    return(
            <div className='weather-container'>
                <div className='displayer'>
                    <h2>{data.name}</h2>
                    <div className='weather-info'>
                        <img src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}/>
                        <p className='temperature'>{Math.round(data.main.temp)}ºC</p>
                    </div>
                    <p className='description'>{data.weather[0].description}</p>
                </div>

                <div className='details'>
                    <p>{date.toLocaleDateString('pt-BR', {weekday: 'long'})}</p>
                    <p>{date.toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: '2-digit'})}</p>
                    <p>Sensação Térmica: {Math.round(data.main.feels_like)}ºC</p>
                    <p>Umidade: {data.main.humidity}%</p>
                    <p>Pressão: {data.main.pressure}</p>
                </div>

            </div>
        
    )
}

export default WeatherInformations