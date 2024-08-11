import {
  useParams,
  useNavigate,
  useRouteLoaderData,
  defer,
  json,
} from "react-router-dom";

import CountryItemDetails from "../components/CountyItemDetails.jsx";
import ArrowBack from "../assets/back.png";
import ArrowBackBlack from "../assets/back-black.png";
import { ThemeContext } from "../context/Theme.jsx";
import { useContext } from "react";
export default function CountryDetailsPage() {
  const { country } = useRouteLoaderData("country-details");
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  return (
    <div className="country-details-box">
      <button onClick={() => navigate(-1)}>
        <img
          src={theme === "light theme" ? ArrowBackBlack : ArrowBack}
          alt=""
        />
        Back
      </button>
      <CountryItemDetails country={country} />
    </div>
  );
}

async function loadEvent(id) {
  const response = await fetch("https://restcountries.com/v3.1/alpha/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}

export async function loader({ params }) {
  const id = params.countryId;

  return defer({
    country: await loadEvent(id),
  });
}
