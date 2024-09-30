import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../AppContext.jsx";
import "./style.css";

export default function CountryFormComponent() {
  const { state } = useContext(AppContext);
  const [selectedCapital, setSelectedCapital] = useState("");
  const [selectedTranslation, setSelectedTranslation] = useState("");
  const [availableTranslations, setAvailableTranslations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedCapital) {
      const country = state.countries.find(
        (country) => country.capital[0] === selectedCapital
      );
      if (country) {
        setAvailableTranslations(Object.keys(country.translations));
        setSelectedTranslation("");
      }
    }
  }, [selectedCapital]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const country = state.countries.find(
      (country) => country.capital[0] === selectedCapital
    );
    if (country && selectedTranslation) {
      navigate(
        `/countries/${country.name.official}?translation=${selectedTranslation}`
      );
    } else if (country) {
      navigate(`/countries/${country.name.official}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Capital Form Component</h3>
      <label>
        Select Capital
        <select
          value={selectedCapital}
          onChange={(e) => setSelectedCapital(e.target.value)}
        >
          <option value="">Select Capital</option>
          {state.countries.map((country) => (
            <option key={country.id} value={country.capital[0]}>
              {country.flag} {country.capital[0]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Select Translation
        <select
          value={selectedTranslation}
          onChange={(e) => setSelectedTranslation(e.target.value)}
        >
          <option value="">Select Translation</option>
          {availableTranslations.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">
        Read more about {selectedCapital || "Country"}
      </button>
    </form>
  );
}
