import { useEffect } from "react";
import useDarkToggle from "./hooks/useDarktoggle";
import KeyboardLayout from "./components/Keyboard";

function App() {
  const [colorTheme, setColorTheme] = useDarkToggle();

  const devicetheme = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  useEffect(() => {
    devicetheme ? setColorTheme("light") : setColorTheme("dark");
  }, [devicetheme]);

  return (
    <div className="h-screen w-full dark:bg-black bg-light_grey flex justify-center items-center">
      <KeyboardLayout />
    </div>
  );
}

export default App;
