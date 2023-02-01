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
    <div className={` 
      ${ (activeKey.toUpperCase()) === (figure) ? '!bg-accent dark:bg-accent !text-white ' : '' } 
      ${ figure === ' ' ? 'lg:w-[454px] dark:lg:w-[454px] w-80 dark:w-80 ' :'' } 
      ${ figure.toUpperCase() === 'SHIFT' ? 'lg:w-[100px] w-[100px] dark:lg:w-32 dark:w-20 w-28' :'' } 
      rounded-md dark:bg-black bg-white lg:w-16 lg:h-16 w-14 h-14 text-xs lg:text-lg flex justify-center items-center dark:text-white text-black `}>
      {figure}
    </div>
  );
}

export default Key;
