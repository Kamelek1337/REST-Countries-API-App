import { useNavigate } from "react-router-dom";

export default function ContryItemDetails({ country }) {
  if (country !== undefined) {
    const navigate = useNavigate();

    const firstItem = country[0];
    const firstNativeName =
      firstItem.name &&
      firstItem.name.nativeName &&
      Object.values(firstItem.name.nativeName)[0];

    const firstCurrencies =
      firstItem.currencies && Object.values(firstItem.currencies)[0];

    const formatter = new Intl.NumberFormat("en-US");

    const formatedCountryPopulation = formatter.format(firstItem.population);

    return (
      <article className="information-box">
        <div className="flag-box">
          <img src={firstItem.flags.svg} alt="" />
        </div>
        <div className="informations">
          <h1>{firstItem.name.common}</h1>
          <div className="wrapper">
            <div className="common-info">
              <p>
                <span style={{ fontWeight: "600" }}>Native Name: </span>
                {firstNativeName ? firstNativeName.common : "N/A"}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Population: </span>
                {formatedCountryPopulation}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Region: </span>
                {firstItem.region}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Sub Region: </span>
                {firstItem.subregion ? firstItem.subregion : "N/A"}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Capital: </span>
                {firstItem.capital ? firstItem.capital : "N/A"}
              </p>
            </div>
            <div className="common-info">
              <p>
                <span style={{ fontWeight: "600" }}>Top Level Domain: </span>
                {firstItem.tld}
              </p>
              <p>
                <span style={{ fontWeight: "600" }}>Currencies: </span>
                {firstCurrencies ? firstCurrencies.name : "N/A"}
              </p>
              <p id="languages">
                <span style={{ fontWeight: "600" }}>Languages: </span>
                {firstItem.languages &&
                  Object.entries(firstItem.languages).map(
                    ([key, value], index, array) => (
                      <li key={key} style={{ fontWeight: "300" }}>
                        {value}
                        {index < array.length - 1 && ","}
                      </li>
                    )
                  )}
              </p>
            </div>
          </div>
          <div className="borders">
            <p>Border Countries:</p>
            {firstItem.borders === undefined ? (
              <p>This country doesn't shares borders with another country</p>
            ) : (
              <ul>
                {firstItem.borders.map((border) => (
                  <button
                    key={border}
                    id="border-buttons"
                    onClick={() => navigate(`/${border}`)}
                  >
                    {border}
                  </button>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
    );
  }
}
