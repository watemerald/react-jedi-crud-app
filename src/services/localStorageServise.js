import { useState, useEffect } from "react";
import { getPeople, getStarships, getPlanets } from "./swApiService";

const localStorageHookFactory = (name, getter) => {
  return () => {
    const [data, setData] = useState(() => {
      // Upon loading the page, check if there are any objects in local storage already.
      let localdata = JSON.parse(localStorage.getItem(name));
      if (localdata) return localdata;

      // If there is no data in localstorage, set temporary state before useEffect will update it using the API
      return [];
    });

    useEffect(() => {
      const getData = async () => {
        const data = await getter();
        console.log(data);
        return setData(data);
      };

      // If there are, then load them, otherwise get from API

      let localdata = localStorage.getItem(name);
      if (!localdata) getData();
    }, []);

    // Save the people list to localStorage whenever the list changes
    useEffect(() => {
      console.log(`saving ${name}`, data);
      localStorage.setItem(name, JSON.stringify(data));
    }, [data]);

    return [data, setData];
  };
};

export const usePeople = localStorageHookFactory("people", getPeople);
export const usePlanets = localStorageHookFactory("planets", getPlanets);
export const useStarships = localStorageHookFactory("starships", getStarships);
