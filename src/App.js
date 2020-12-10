import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "./nasa-logo.svg";
const dotenv = require("dotenv");

dotenv.config();

function App() {
  const [date, setareDate] = useState("");

  useEffect(() => {
    const an = Math.floor(Math.random() * (2020 - 1995) + 1995);
    const luna = Math.floor(Math.random() * 12 + 1);
    const zi = Math.floor(Math.random() * 28 + 1);

    const prelucrareDate = async () => {
      const cheieApi = process.env.REACT_APP_API_KEY;

      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?date=${an}-${luna}-${zi}&api_key=${cheieApi}`
      )
        .then((res) => res.json())
        .then((res) => setareDate(res))
        .catch((err) => console.log(err, "error"));
      console.log(res);
    };
    prelucrareDate();
  }, []);

  return (
    <>
      <div className="container">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="" srcset="" />
          </a>
        </div>
        <div className="topic">Astronomy Picture of the Day</div>
        <img
          src={date.hdurl}
          alt=""
          title={date.explanation}
          className="nasa-image"
        />
        <div className="text-cont">
          <p className="explanation">{date.explanation}</p>
          <div className="info">
            <div className="info1">{date.date}</div>
            <div className="info2">{date.title}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
