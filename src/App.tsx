import Key from "./components/Key"

function App() {

  const first_row = ['Q','W','E','R','T','Y','U','I','O','P','[',']']
  const second_row = ['A','S','D','F','G','H','J','K','L',';',"'"]
  const third_row = ['Z','X','C','V','B','N','N','M','<','>',]

  return (
    <div className="h-screen w-full bg-light_grey flex justify-center items-center">
      <div className="w-fit h-fit border-4 border-white rounded-lg p-4 bg-black bg-opacity-10" >
        <div className="flex gap-2" >
          {
            first_row.map((el:string) => (
              <Key key="el" figure={el} />
            ))
          }
        </div>
        <div className="relative left-8 flex gap-2 py-2" >
          {
            second_row.map((el:string) => (
              <Key key="el" figure={el} />
            ))
          }
        </div>
        <div className="flex gap-2 relative left-16" >
          {
            third_row.map((el:string) => (
              <Key key="el" figure={el} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
