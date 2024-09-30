import React, { useContext } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import AppContext from "../../AppContext.jsx";
import { deleteCountry } from "../../store/actions.js";
import RedirectButtonComponent from "../RedirectButtonComponent/RedirectButtonComponent.jsx";
import "./style.css"

export default function CountryCardComponent() {
  const { state, dispatch } = useContext(AppContext);
  const { countryName } = useParams();
  const [searchParams] = useSearchParams();
  const translation = searchParams.get("translation");
  const navigate = useNavigate();

  const country = state.countries.find((c) => c.name.official === countryName);

  if (!country) {
    return <p>Country not found.</p>;
  }

  const countryDisplayName = translation
    ? country.translations[translation]?.official || country.name.official
    : country.name.official;

  const handleDelete = () => {
    deleteCountry(dispatch, country.id);
    navigate("/countries");
  };

  const renderData = (data) => {
    if (typeof data === "object" && data !== null) {
      if (Array.isArray(data)) {
        return (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{renderData(item)}</li>
            ))}
          </ul>
        );
      } else {
        return (
          <ul>
            {Object.entries(data).map(([key, value]) => (
              <li key={key}>
                <strong>{capitalizeFirstLetter(key)}:</strong>{" "}
                {renderData(value)}
              </li>
            ))}
          </ul>
        );
      }
    } else {
      return <span>{data}</span>;
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <div className="country__card">
        <h3>{countryDisplayName}</h3>
        {renderData(country)}
        <button onClick={handleDelete}>Delete country</button>
      </div>
      <RedirectButtonComponent path="/countries" title="Back to Countries" />
    </>
  );
}
