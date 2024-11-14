import './WeatherInformations5Days.css'
function WeatherInformations5Days({ data5Days }) {
    let date = new Date()

    let forecast = {}
    for (let item of data5Days.list) {
        const date = new Date(item.dt * 1000).toLocaleDateString('pt-BR')
        if (!forecast[date]) {
            forecast[date] = item
        }
    }

    const nextFiveDays = Object.values(forecast).slice(1, 6)

    console.log(nextFiveDays)

    function formatDate(unixTimeStamp) {
        const formatedDate = new Date(unixTimeStamp * 1000).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', weekday: 'long' })
        return formatedDate
    }

    return (
        <div className='forecast-container'>
            <p>Previsão para os próximos 5 dias</p>
            <div className='forecast-list'>
                {nextFiveDays.map(element => (
                    <div key={element.dt} className='forecast-item'>
                        <p>{formatDate(element.dt)}</p>
                        <p className='forecast-temperature'>{Math.round(element.main.temp)}ºC</p>
                        <img src={`http://openweathermap.org/img/wn/${element.weather[0].icon}.png`} />
                        <p className='forecast-description'>{element.weather[0].description}</p>
                    </div>
                )
                )}

            </div>

        </div>
    )
}

export default WeatherInformations5Days