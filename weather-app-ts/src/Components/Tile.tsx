import Feels from "./Icons/Feels";
import Wind from "./Icons/Wind";
import Humidity from "./Icons/Humidity";
import Visibility from "./Icons/Visibility";
import Pop from "./Icons/Pop";
import Pressure from "./Icons/Pressure";

type ForecastListProps = {
    icon: "wind" | "feels" | "humidity" | "visibility" | "pop" | "pressure",
    title: string,
    info: string | JSX.Element,
    description: string
}

const icons = {
    wind: Wind,
    feels: Feels,
    humidity: Humidity,
    visibility: Visibility,
    pop: Pop,
    pressure:Pressure

}

const Tile = ({ icon, title, info, description }: ForecastListProps): JSX.Element => {
    const Icon = icons[icon]
  return (
    <article className="w-[140px] h-[130px] text-zinc-700 text-xs font-black flex flex-col justify-between items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-2 mb-5  ">
      <div className="flex text-center text-sm font-bold">
              <Icon /> <h4 className="ml-1">{ title}</h4>
          </div>
          <h3 className="mt-2 text-lg ">{info}</h3>
          <p className="text-xs font-bold">{ description}</p>
    </article>
  );
}

export default Tile