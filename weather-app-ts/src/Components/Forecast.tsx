import { getHumidityValue, getPop, getSunTime, getVisibilityValue } from "./helpers"
import Sunrise from "./Icons/Sunrise"
import Sunset from "./Icons/Sunset"
import Tile from "./Tile"
import { forecastType } from "./Types"
import { getWindDirection } from './helpers/index';

type Props = {
    dataforecast:forecastType
}

const Degree = ({temp}:{temp:number}): JSX.Element  => {
    return <span>
        {temp}<sup>o</sup>
    </span>
}

const Forecast = ({ dataforecast }: Props): JSX.Element => {
    const today = dataforecast.list[0]

    return (
      <>
        <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
          <div className="mx-auto w-[300px]">
            <section className="text-center">
              <h2 className="text-2xl font-black">
                {dataforecast.name}
                <span className="font-thin">{dataforecast.country} </span>
              </h2>
              <h1 className="text-4xl font-extrabold">
                <Degree temp={Math.round(today.main.temp)} />
              </h1>
              <p className="text-sm">
                {today.weather[0].main}
                {today.weather[0].description}
              </p>
              <p>
                High Temp:
                <Degree temp={Math.ceil(today.main.temp_max)} /> {""}
                Low Temp:
                <Degree temp={Math.floor(today.main.temp_min)} />
              </p>
            </section>
            <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
              {dataforecast.list.map((item, index) => (
                <div
                  key={index}
                  className="inline-block text-center w-[50px] flex-shrink-0"
                >
                  <p>
                    {index === 0 ? "Now" : new Date(item.dt * 1000).getHours()}{" "}
                  </p>
                  <img
                    alt={`weather-icon-${item.weather[0].description}`}
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  />
                  <p className="text-sm">
                    <Degree temp={Math.round(item.main.temp)} />
                  </p>
                </div>
              ))}
            </section>
            {/* SUNRISE */}
            <section className="flex flex-wrap justify-between text-zinc-700">
              <div className="w-[140px] text-xs font-black flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-5 mb-5">
                <Sunrise />{" "}
                <span className="mt-3">{getSunTime(dataforecast.sunrise)}</span>
              </div>
              <div className="w-[140px] text-xs font-black flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-5 mb-5">
                <Sunset />{" "}
                <span className="mt-3">{getSunTime(dataforecast.sunset)} </span>
              </div>

              {/* Wind */}
              <Tile
                icon="wind"
                title="wind"
                info={`${Math.round(today.wind.speed)} Km/h`}
                description={`${getWindDirection(
                  Math.round(today.wind.deg)
                )}, gusts ${today.wind.gust.toFixed(1)} Km/h`}
              />

              {/* Feels */}
              <Tile
                icon="feels"
                title="feels Like"
                info={<Degree temp={Math.round(today.main.feels_like)} />}
                description={`feels ${
                  Math.round(today.main.feels_like) <
                  Math.round(today.main.temp)
                    ? "Cooler"
                    : "Warmer"
                }`}
              />
              {/* Humidity */}
              <Tile
                icon="humidity"
                title="humidity"
                info={`${today.main.humidity}`}
                description={getHumidityValue(today.main.humidity)}
              />

              {/* Pop */}
              <Tile
                icon="pop"
                title="Precipitation"
                info={`${Math.round(today.pop * 100)}%`}
                description={`${getPop(today.pop)}, cloud as ${
                  today.clouds.all
                }`}
              />
              {/* Pressure */}
              <Tile
                icon="pressure"
                title="Pressure"
                info={`${today.main.pressure}hpa`}
                description={`${
                  Math.round(today.main.pressure) < 1013 ? "Lower" : "Higher"
                } than standard`}
              />
              {/* Visibility */}
              <Tile
                icon="visibility"
                title="Visibility"
                info={`${(today.visibility/1000).toFixed() }Km`}
                description={getVisibilityValue(today.visibility)}
              />
            </section>
          </div>
        </div>
      </>
    );
}

export default Forecast     
