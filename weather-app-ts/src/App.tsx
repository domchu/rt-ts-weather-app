import { ChangeEvent, useState } from "react";
import "./App.css";

const  App = ():JSX.Element => {
 const [term, setTerm] = useState("")

  const onInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log(e.target.value);
    
    
  }
  //api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}


  http: return (
    <>
      <article>
        <main className="flex justify-center items-center h-[100vh] w-full bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400">
          <section className="bg-white bg-opacity-blur-lg drop-shadow-lg rounded text-zinc-700 w-full md:max-w-[500px] p-4 flex flex-col text-center justify-center items-center h-full lg:h-[500px] bg-opacity-20">
            <h1 className="text-4xl font-thin">
              Weather <span className="font-black">Forecast</span>
            </h1>
            <p className="text-sm mt-2">
              Enter the place you want to know the weather of and select an
              option from the dropdown
            </p>
            <div className="flex mt-10 md:mt-4">
              <input
                type="text"
                value={term}
                className="px-2 py-1 rounded-1-md border-2 border-white"
                onChange={onInputChange}
              />
              <button className="rounded-r-md border-2 text-zinc-100 hover:border-zinc-500 hover:text-zinc-500 px-2 py-1 cursor-pointer">
                Search
              </button>
            </div>
          </section>
        </main>
      </article>
    </>
  );
}

export default App;
