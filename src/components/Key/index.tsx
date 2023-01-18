import { useEffect, useState } from "react";

type KeyType = {
  figure: string;
};

function Key({ figure }: KeyType) {

  const [ activeKey, setActiveKey ] = useState('')

  useEffect(()=>{
    window.addEventListener('keydown',(event) => {
      setActiveKey(event.key)
    })
    window.addEventListener('keyup',() => {
      setActiveKey('')
    })

    return () => {
      window.removeEventListener('keydown',()=>{setActiveKey('')})
      window.removeEventListener('keyup',()=>{setActiveKey('')})
    }
},[])

  return (
    <div className={` ${ (activeKey.toUpperCase()) === (figure) ? 'bg-accent text-white' : '' } rounded-md dark:bg-black bg-white w-16 h-16 flex justify-center items-center dark:text-white text-black `}>
      {figure}
    </div>
  );
}

export default Key;
