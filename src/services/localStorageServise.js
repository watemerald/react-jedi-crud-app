import { useState, useEffect } from "react";
import { getPeople } from "./swApiService";

export const usePeople = () => {
  const [people, setPeople] = useState(() => {
    const getData = async () => {
      const data = await getPeople();
      console.log(data);
      return data;
    };

    // Upon loading the page, check if there are any objects in local storage already.
    // If there are, then load them, otherwise get from API

    let localdata = localStorage.getItem("people");
    if (localdata) {
      return JSON.parse(localdata);
    } else {
      return getData();
    }
  });

  // Save the people list to localStorage whenever the list changes
  useEffect(() => {
    console.log("saving people", people);
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  return [people, setPeople];
};
