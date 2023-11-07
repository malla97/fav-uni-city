import React from "react";
import {City} from "./City";

const tampere = new City("Tampere", 61.49911, 23.78712)
tampere.displayInfo();

const Universities: React.FC = () => {
  return (
    <div className="unies">
      <h1>Welcome to the Universities app!</h1>
      <h5>{tampere.name}</h5>
      <h5>{tampere.latitude}</h5>
      <h5>{tampere.longitude}</h5>
    </div>
  );
};

export default Universities;

/**
 * Joku koordinaatit luokka: name, säiliö jossa (lat, long)
 * Tampere: 61.49911 23.78712
 * Helsinki: 60.16952 24.93545
 * Oulu: 65.01236 25.46816
 * Turku: 60.45148 22.26869
 * Jyväskylä: 62.24147 25.72088
 * Vaasa: 63.096 21.61577
 * Rovaniemi: 66.5 25.71667
 * Kuopio: 62.89238 27.67703
 * Lappeenranta: 61.0583,28.1861
 * Joensuu: 62.6000,29.7639
 */

/** WeatherAPI from Open-Meteo: https://open-meteo.com */