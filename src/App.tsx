import { useEffect, useState } from "react";
import useDarkToggle from "./hooks/useDarktoggle";
import KeyboardLayout from "./components/Keyboard";
import TextBox from "./components/TextBox";

function App() {
  const [colorTheme, setColorTheme] = useDarkToggle();
  const [ activeKey, setActiveKey ] = useState('')

  useEffect(()=>{
    window.addEventListener('keypress',(event) => {
      setActiveKey(event.key)
    })
    // window.addEventListener('keyup',() => {
    //   setActiveKey('')
    // })

    return () => {
      window.removeEventListener('keypress',()=>{setActiveKey('')})
      // window.removeEventListener('keyup',()=>{setActiveKey('')})
    }
},[])

  const devicetheme = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  useEffect(() => {
    devicetheme ? setColorTheme("light") : setColorTheme("dark");
  }, [devicetheme]);

  return (
    <div className="h-screen w-full dark:bg-black bg-light_grey flex justify-center items-center flex-col gap-7">
      <TextBox typed={activeKey} />
      <KeyboardLayout />
    </div>
  );
}

export default App;
