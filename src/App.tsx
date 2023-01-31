import { useEffect, useState } from "react";
import useDarkToggle from "./hooks/useDarktoggle";
import KeyboardLayout from "./components/Keyboard";
import TextBox from "./components/TextBox";
import Timer from "./components/Timer"

function App() {
  const [colorTheme, setColorTheme] = useDarkToggle();
  const [ activeKey, setActiveKey ] = useState('')
  const [ start, setStart ] = useState(false)
  const [ done, setDone ] = useState(false)

  useEffect(()=>{
    if(start){
      window.addEventListener('keypress',(event) => {
        setActiveKey(event.key)
      })
    }

    return () => {
      window.removeEventListener('keypress',()=>{setActiveKey('')})
      // window.removeEventListener('keyup',()=>{setActiveKey('')})
    }
},[start])

  const devicetheme = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  useEffect(() => {
    devicetheme ? setColorTheme("light") : setColorTheme("dark");
  }, [devicetheme]);

  return (
    <div className="h-screen w-full dark:bg-black bg-light_grey flex justify-center items-center flex-col gap-7">
      <Timer start={start} setDone={setDone} toggleStart={()=>setStart(!start)} />
      <TextBox done={done} typed={activeKey} />
      <KeyboardLayout />
    </div>
  );
}

export default App;
