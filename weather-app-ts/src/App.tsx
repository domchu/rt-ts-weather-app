
import "./App.css";
import useForecast from "./Components/Hooks/useForecast";
import Search from "./Components/Search";

const  App = ():JSX.Element => {
  

  const { onOptionSelect, onSubmit, term, onInputChange, options, forecast } = useForecast();
  //api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

  

 return (
   <>
     <article>
       <main className="flex justify-center items-center h-[100vh] w-full bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400">
         
         {forecast ? (
          //  "We have a forecast"
           forecast.sunrise
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
