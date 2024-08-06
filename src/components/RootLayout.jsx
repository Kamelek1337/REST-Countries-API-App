import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme.jsx";

export default function RootLayout() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <MainNavigation />
      <main data-theme={theme}>
        <Outlet />
      </main>
    </>
  );
}
