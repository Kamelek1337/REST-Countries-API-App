import SearchBar from "./SearchBar";
import Country from "./Country";

export default function CountryFinder({ country }) {
  if (country !== undefined) {
    return (
      <>
        <SearchBar items={country} itemKeyFn={(country) => country.cca3}>
          {(country) => <Country country={country} />}
        </SearchBar>
      </>
    );
  }
}
