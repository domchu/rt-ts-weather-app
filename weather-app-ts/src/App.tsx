import { ChangeEvent, useEffect, useState } from "react";
import { optionsType } from "./Components/Types";
import "./App.css";
import Search from "./Components/Search";

const  App = ():JSX.Element => {
  const [term, setTerm] = useState<string>("");
  const [options, setOptions] = useState<[]>([]);
  const [city, setCity] = useState<optionsType | null>(null);
  const [forecast, setForecast] = useState< null>(null)


  
  const getSearchOptions = (value:string) => {
     fetch(
       `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=16eeeb112c618cc4a926049619b19455`
     )
       .then((response) => response.json())
       .then((data) => setOptions(data ));
  }


  // SEARCH INPUT BUTTON
  const onInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    const  value  = e.target.value.trim();
    setTerm(value);
    if (value === "") return
    getSearchOptions(value)
  }


  const getForecast = (city:optionsType) => {
     fetch(
       `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=16eeeb112c618cc4a926049619b19455`
     )
       .then((Response) => Response.json())
       .then((data) => setForecast(data)); 
  }

  // ONSUBMIT
  const onSubmit = () => {
    if (!city) return
    getForecast(city)
  }

  // OPTIONS DROPDOWN
  const onOptionSelect = (option: optionsType) => {
    setCity(option)
     
  }

  // CLEAR
  useEffect(() => {
    if (city) {
      setTerm(city.name)
      setOptions([])
    }
  },[city])

  //api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

  

 return (
   <>
     <article>
       <main className="flex justify-center items-center h-[100vh] w-full bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400">
         
         {forecast ? (
         "We have a forecast"
         ):
           (
           
         <Search
           term={term}
           options={options}
           onInputChange={onInputChange}
           onOptionSelect={onOptionSelect}
           onSubmit={onSubmit} />
         )}
       </main>
     </article>
   </>
 );
}

export default App;
