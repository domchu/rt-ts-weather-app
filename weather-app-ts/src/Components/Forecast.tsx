import { forecastType } from "./Types"

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
                <Degree temp={Math.ceil(today.main.temp_max)} />
                Low Temp:
                <Degree temp={Math.floor(today.main.temp_min)} />
              </p>
            </section>
          </div>
        </div>
      </>
    );
}

export default Forecast  