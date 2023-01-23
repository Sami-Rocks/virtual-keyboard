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
      ${ figure === ' ' ? 'lg:w-[354px] dark:lg:w-[354px] md:w-80 dark:md:w-80 ' :'' } 
      ${ figure.toUpperCase() === 'SHIFT' ? 'lg:w-28 md:w-20 dark:lg:w-28 dark:md:w-20 w-28' :'' } 
      rounded-md dark:bg-black bg-white lg:w-16 lg:h-16 w-14 h-14 text-xs lg:text-lg flex justify-center items-center dark:text-white text-black `}>
      {figure}
    </div>
  );
}

export default Key;
