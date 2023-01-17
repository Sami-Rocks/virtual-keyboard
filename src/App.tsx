import { useEffect } from "react"
import Key from "./components/Key"
import useDarkToggle from "./hooks/useDarktoggle"

function App() {

  const [colorTheme, setColorTheme] = useDarkToggle()
  
  const devicetheme = window.matchMedia('(prefers-color-scheme: light)').matches
  
  useEffect(()=>{
    devicetheme ? setColorTheme('light') :  setColorTheme('dark')
  },[devicetheme])

  const first_row = ['Q','W','E','R','T','Y','U','I','O','P','[',']']
  const second_row = ['A','S','D','F','G','H','J','K','L',';',"'"]
  const third_row = ['Z','X','C','V','B','N','M','<','>',]

  return (
    <div className="h-screen w-full dark:bg-black bg-light_grey flex justify-center items-center">
      <div className="w-fit h-fit dark:bg-dark_grey border-4 border-white dark:border-dark_grey rounded-lg p-4 bg-black bg-opacity-10" >
        <div className="flex gap-2" >
          {
            first_row.map((el:string) => (
              <Key key={el} figure={el} />
            ))
          }
        </div>
        <div className="relative left-8 flex gap-2 py-2" >
          {
            second_row.map((el:string) => (
              <Key key={el} figure={el} />
            ))
          }
        </div>
        <div className="flex gap-2 relative left-16" >
          {
            third_row.map((el:string) => (
              <Key key={el} figure={el} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
