import React, { Component } from "react";

import AstronomyCard from "./AstronomyCard";
import axios from "axios";

class AstronomyContainer extends Component {
  constructor() {
    super();

    this.state = {
      astronomy: []
    };
  }

  randomDate() {
    const year = new Date().getFullYear() - 1; // current year minus 1
    const month = Math.floor(Math.random() * 12) + 1; // random month between 1 and 12
    const day = Math.floor(Math.random() * 25) + 1; // random day between 1 and 25
    const randomTime = {
      year,
      month,
      day
    };
    return randomTime;
  }

  queryForImage() {
    const randomDate = this.randomDate();
    console.log(randomDate);
    const API_KEY = "Yxr0aPO5Go1B1eAu8BYhZiR1tQXVMhNeXb4FqYHG";
    const END_POINT = `https://api.nasa.gov/planetary/apod?date=${randomDate.year}-${randomDate.month}-${randomDate.day}&api_key=`;

    axios
      .get(END_POINT + API_KEY)
      .then(response => {
        this.setState({
          astronomy: response.data
        });
      })
      .catch(error => {
        console.log(error, "failed to fetch data");
      });
  }
  componentDidMount() {
    this.queryForImage();
  }

  render() {
    const { astronomy } = this.state;
    return <AstronomyCard data={astronomy} />;
  }
}

export default AstronomyContainer;
