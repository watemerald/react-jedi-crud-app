import React, { useState, useEffect } from "react";
import { getPeople } from "./swApiService";

export const usePeople = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getPeople();
      console.log(data);
      setPeople(data);
    };

    // Upon loading the page, check if there are any objects in local storage already.
    // If there are, then load them, otherwise get from API

    let localdata = localStorage.getItem("people");
    if (localdata) {
      setPeople(JSON.parse(localdata));
    } else {
      getData();
    }
  }, []);

  // Save the people list to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  return [people, setPeople];
};
