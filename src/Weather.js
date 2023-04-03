import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import FormattedDate from "./FormattedDate";
import "./Weather.css";


export default function Weather() {
return (
    <div className="Weather">
        <form>
            <div className="row">  
            <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
       </div>
       </div> 
       </form>
<h1>New York</h1>
<ul>
    <li>Sunday 22:00</li>
    <li>Clear</li>
    </ul>
    <div className="row">
        <div className="col-6">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAUhJREFUeNrt230NgzAQh2GkIAUJyJgMJCABCZNQKcxBHdyOpFkyEkYGV9oL75Lff2Rwz8pXe2tEpLlzGgAAAAAAAAAAYHsDg4+8Hp1m0ATNrJGNzGmbZdvOZN+lAFLRkyb+KHgvMX1H5wYgFR5OFL2VcATiMgA9uFbzzFD4Oss+2qoA9ID6k0P9yKnRVwGgBzJeWPg6Y1GAdIGSwpmKAFRS/C5CFoDCw/6v08EcIF3wpNL0WQHSrS5WDBDXt0hrgGfFxX+eE7IApCc8cZIuB0BwBBBMAZz9+l+jwApgcggwWQJEhwDRBMDp8P+cBhYAg2OAwQIgOAYIFgCzY4DZAkBcB4C7AywvcIwAAADgNsiDEI/CvAzxOsyECFNiTIoyLc7CCEtjLI6yPE6DBC0yNEnRJkejJK2yNEvTLs8fJgAAAAAAAADg1nkDlR7XfJiH1ggAAAAASUVORK5CYII=" alt="Clear" />
      46°F
      </div>
      <div className="col-6">
        <ul>
            <li>Precipitation: 0% </li>
            <li>Humidity: 25%</li>
            <li>Wind: 5 mph</li>
        </ul>
        </div>
    </div>
    


    </div>
)

  ;
}