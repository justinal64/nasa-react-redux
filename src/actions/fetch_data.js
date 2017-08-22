import axios from "axios";

export default function fetchData() {
  const randomDate = () => {
    const year = new Date().getFullYear() - 1; // current year minus 1
    const month = Math.floor(Math.random() * 12) + 1; // random month between 1 and 12
    const day = Math.floor(Math.random() * 25) + 1; // random day between 1 and 25

    const randomTime = {
      year,
      month,
      day
    };
    return year + "-" + month + "-" + day;
  };

  const apiDate = randomDate();

  const API_KEY = "Yxr0aPO5Go1B1eAu8BYhZiR1tQXVMhNeXb4FqYHG";
  const END_POINT = `https://api.nasa.gov/planetary/apod?date=${apiDate}&api_key=`;
  const request = axios.get(END_POINT + API_KEY);

  return {
    // Return plain object with props
    type: "FETCH_DATA", // Action Type
    payload: request // Action Payload(cargo)
  };
}
