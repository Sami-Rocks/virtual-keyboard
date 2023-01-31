import { useEffect, useState } from "react"

type TimerType = {
    start:boolean,
    toggleStart:any
}

const Timer = ({start, toggleStart, setDone}:any) => {

    const [ countdown, setCountdown ] = useState(30)

    useEffect(()=>{
        if(countdown === 0) setDone(true)
        if(countdown > 0 && start){
            setTimeout(()=>{
                setCountdown((prevState)=> prevState - 1)
            }, 1000)
        }
    },[countdown, start])

    return(
        <div>
            <button className=" " onClick={toggleStart} >{start ? 'Stop' : 'Start'}</button>
            <p className={`text-4xl dark:text-light_grey ${(countdown < 10) ? 'dark:text-red text:red' : ''} ` } >00 : {countdown > 9 ? countdown: '0'+countdown}</p>
        </div>
    )
}

export default Timer