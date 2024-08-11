import { useNavigate } from "react-router-dom";

export default function Country({ country }) {
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("en-US");

  const formatedCountryPopulation = formatter.format(country.population);

  return (
    <article className="country-box" onClick={() => navigate(country.cca3)}>
      <img src={country.flags.png} alt="" />
      <div className="info">
        <h3>{country.name.common}</h3>
        <div className="details">
          <p>
            <span style={{ fontWeight: "600" }}>Population: </span>
            {formatedCountryPopulation}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Region: </span> {country.region}
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Capital: </span>
            {country.capital}
          </p>
        </div>
      </div>
    </article>
  );
}
