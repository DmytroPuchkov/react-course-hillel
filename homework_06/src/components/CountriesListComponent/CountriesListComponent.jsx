import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext.jsx";
import { deleteCountry } from "../../store/actions.js";
import "./style.css";

export default function CountriesListComponent() {
  const { state, dispatch } = useContext(AppContext);

  return state.countries.length ? (
    <ul className="country__list">
      {state.countries.map((country) => (
        <li key={country.id}>
          <span>{country.flag}</span>{" "}
          <Link to={`/countries/${country.name.official}`}>
            {country.name.official}
          </Link>{" "}
          <button onClick={() => deleteCountry(dispatch, country.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : null;
}
