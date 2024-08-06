import { useEffect, useState } from "react";
import CountryFinder from "../components/CountryFinder";

export default function HomePage() {
  const [country, setCountry] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        // Handle the response data here
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        // Handle the error here
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <article className="container">
      <CountryFinder country={country} />
    </article>
  );
}
