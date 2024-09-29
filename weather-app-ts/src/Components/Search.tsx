
import { ChangeEvent } from "react";
import { optionsType } from "./Types";

type HandleProps = {
    term: string,
    options: [],
    onInputChange:(event:ChangeEvent<HTMLInputElement>) =>void,
    onOptionSelect: (option:optionsType)=> void,
    onSubmit:() => void,
}


const Search = ({term, options, onInputChange, onOptionSelect, onSubmit }:HandleProps): JSX.Element => {
  
  return (
    <>
      <article>
        <main className="flex justify-center items-center h-[100vh] w-full bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400">
          <section className="bg-white bg-opacity-blur-lg drop-shadow-lg rounded text-zinc-700 w-full md:max-w-[500px] p-4 flex flex-col text-center justify-center items-center h-full lg:h-[500px] bg-opacity-20">
            <h1 className="text-4xl font-thin text-white">
              Weather <span className="font-black text-blue-600">Forecast</span>
            </h1>
            <p className="text-sm mt-2">
              Enter the place you want to know the weather of and select an
              option from the dropdown
            </p>
            <div className="relative flex mt-10 md:mt-4">
              <input
                type="text"
                value={term}
                className="px-2 py-1 rounded-1-md border-2 border-white"
                onChange={onInputChange}
              />

              {/* OPTIONS */}

              <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
                {options.map((option: optionsType, index: number) => (
                  <li key={index}>
                    <button
                      className="text-left-text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                      onClick={() => onOptionSelect(option)}
                    >
                      <p>{option.name}</p>
                    </button>
                  </li>
                ))}
              </ul>
              {/* OPTIONS */}
              <button
                className="rounded-r-md border-2 text-zinc-100 hover:border-zinc-500 hover:text-zinc-500 px-2 py-1 cursor-pointer"
                onClick={onSubmit}
              >
                Search
              </button>
            </div>
          </section>
        </main>
      </article>
    </>
  );
};

export default Search ;





// const [term, setTerm] = useState<string>("");
//   const [options, setOptions] = useState<[]>([]);
//   const [city, setCity] = useState<optionsType | null>(null);

//   const getSearchOptions = (value: string) => {
//     fetch(
//       `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=16eeeb112c618cc4a926049619b19455`
//     )
//       .then((response) => response.json())
//       .then((data) => setOptions(data));
//   };

//   // SEARCH INPUT BUTTON
//   const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value.trim();
//     setTerm(value);
//     if (value === "") return;
//     getSearchOptions(value);
//   };

//   const getForecast = (city: optionsType) => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=16eeeb112c618cc4a926049619b19455`
//     )
//       .then((Response) => Response.json())
//       .then((data) => console.log({ data }));
//   };

//   // ONSUBMIT
//   const onSubmit = () => {
//     if (!city) return;
//     getForecast(city);
//   };

//   // OPTIONS DROPDOWN
//   const onOptionSelect = (option: optionsType) => {
//     setCity(option);
//   };

//   // CLEAR
//   useEffect(() => {
//     if (city) {
//       setTerm(city.name);
//       setOptions([]);
//     }
//   }, [city]);

  //api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
