import { useState, useEffect } from "react";
import { getPeople, getStarships, getPlanets } from "./swApiService";

export const usePeople = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPeople();
      console.log(data);
      return setData(data);
    };

    // Upon loading the page, check if there are any objects in local storage already.
    // If there are, then load them, otherwise get from API

    let localdata = localStorage.getItem("people");
    if (localdata) {
      return setData(JSON.parse(localdata));
    } else {
      return getData();
    }
  }, []);

  // Save the people list to localStorage whenever the list changes
  useEffect(() => {
    console.log("saving people", data);
    localStorage.setItem("people", JSON.stringify(data));
  }, [data]);

  return [data, setData];
};

export const usePlanets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPlanets();
      console.log(data);
      return setData(data);
    };

    // Upon loading the page, check if there are any objects in local storage already.
    // If there are, then load them, otherwise get from API

    let localdata = localStorage.getItem("planets");
    if (localdata) {
      return setData(JSON.parse(localdata));
    } else {
      return getData();
    }
  }, []);

  // Save the planets list to localStorage whenever the list changes
  useEffect(() => {
    console.log("saving planets", data);
    localStorage.setItem("planets", JSON.stringify(data));
  }, [data]);

  return [data, setData];
};

export const useStarships = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getStarships();
      console.log(data);
      return setData(data);
    };

    // Upon loading the page, check if there are any objects in local storage already.
    // If there are, then load them, otherwise get from API

    let localdata = localStorage.getItem("starships");
    if (localdata) {
      return setData(JSON.parse(localdata));
    } else {
      return getData();
    }
  }, []);

  // Save the starships list to localStorage whenever the list changes
  useEffect(() => {
    console.log("saving starships", data);
    localStorage.setItem("starships", JSON.stringify(data));
  }, [data]);

  return [data, setData];
};
