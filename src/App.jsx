import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CountryDetailsPage, {
  loader as countryDetailsLoader,
} from "./pages/CountryDetailsPage.jsx";
import ThemeContextProvider from "./context/Theme.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeContextProvider>
        <RootLayout />
      </ThemeContextProvider>
    ),
    children: [
      {
        path: "REST-Countries-API-App",
        element: <HomePage />,
      },
      {
        path: "REST-Countries-API-App/:countryId",
        element: <CountryDetailsPage />,
        id: "country-details",
        loader: countryDetailsLoader,
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
}

export default App;
