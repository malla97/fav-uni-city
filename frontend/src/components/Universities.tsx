import React, { useState } from "react";
import citiesData from "./cities.json";
import { City } from "./City";



const Universities: React.FC = () => {
  
    const cities: City[] = citiesData.map((data: { name: string; latitude: number; longitude: number; }) => 
                            new City(data.name, data.latitude, data.longitude));


    const citiesLength = cities.length;

    const [firstIndex, setFirstIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(1);
    const [thirdIndex, setThirdIndex] = useState(2);
    const [translate, setTranslate] = useState(0);

    const moveRight = () => {
        if(firstIndex === citiesLength - 1) {
            setFirstIndex(0)
        } else {
            setFirstIndex((prev) => (prev + 1));
        }
        //setTranslate((prev) => prev - 150);
    }

    const moveLeft = () => {
        if(firstIndex === 0) {
            setFirstIndex(citiesLength - 1)
        } else {
            setFirstIndex((prev) => (prev + 1));
        }
        //setTranslate((prev) => prev + 150);
    };


    /*return (
        <div className="unies">
            <h1>Welcome welcome!</h1>
            <div className="city-cards">
                <div className="city-cards-inner" style={{
                    transform: `translateX(${translate}px)`,
                    }}
                >
                    {cities.map((city, key) => (
                        <div key={key} className="city-card">
                            <h2>{city.name}</h2>
                            <p>20C</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="div-buttons">
                <button onClick={moveLeft}>L</button>
                <button onClick={moveRight}>R</button>
            </div>
        </div>
    );*/
    return (
        <div className="unies">
            <h1>Welcome welcome!</h1>
            <div className="city-cards">
                <div className="city-cards-inner" style={{
                    transform: `translateX(${translate}px)`,
                    }}
                >
                    <div className="city-card">
                        <h2>{cities[firstIndex].name}</h2>
                        <p>20C</p>
                    </div>
                    <div className="city-card">
                        <h2>{cities[secondIndex].name}</h2>
                        <p>20C</p>
                    </div>
                    <div className="city-card">
                        <h2>{cities[thirdIndex].name}</h2>
                        <p>20C</p>
                    </div>
                </div>
            </div>
            <div className="div-buttons">
                <button onClick={moveLeft}>L</button>
                <button onClick={moveRight}>R</button>
            </div>
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

/**
 * <h5>{tampere.name}</h5>
    <h5>{tampere.latitude}</h5>
    <h5>{tampere.longitude}</h5>
 */