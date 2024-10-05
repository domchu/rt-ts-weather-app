import { useEffect, useState, ChangeEvent } from "react";
import { optionsType, forecastType } from "../Types";




const useForecast = () => {
    const [term, setTerm] = useState<string>("");
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<optionsType | null>(null);
    const [forecast, setForecast] = useState<forecastType | null>(null);

    const getSearchOptions = (value: string) => {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=16eeeb112c618cc4a926049619b19455`
      )
        .then((response) => response.json())
        .then((data) => setOptions(data))
        .catch((e) => console.log(e));;
    };

    // SEARCH INPUT BUTTON
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim();
      setTerm(value);
      if (value === "") return;
      getSearchOptions(value);
    };

    const getForecast = (city: optionsType) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=16eeeb112c618cc4a926049619b19455`
      )
        .then((Response) => Response.json())
          .then((data) => {
              const forecastData = {
                  ...data.city,
                  list:data.list.slice(0, 16)
              }
            setForecast(forecastData);
        }).catch(e =>console.log(e));
    };

    // ONSUBMIT
    const onSubmit = () => {
      if (!city) return;
      getForecast(city);
    };

    // OPTIONS DROPDOWN
    const onOptionSelect = (option: optionsType) => {
      setCity(option);
    };

    // CLEAR
    useEffect(() => {
      if (city) {
        setTerm(city.name);
        setOptions([]);
      }
    }, [city]);

    return {
        onOptionSelect,
        onSubmit,
        term,
        onInputChange,
        options,
        forecast
    }

}
export default useForecast