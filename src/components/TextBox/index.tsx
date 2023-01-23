import { useEffect, useState } from "react"
import { sample_text } from "../../utils/constants"

function TextBox( {typed}:any ){

    const [ typedText, setTypedText ] = useState<any>('')
    
    const handleTyped = () => {
        switch(typed){
            case 'Backspace':
                return setTypedText(typedText.slice(0, typedText.length -1))
            case 'Shift':
                return null
            case ' ':
                console.log('here')
                return setTypedText(typedText.concat('␣'))
            default:
                // return (typed === sample_text[typedText.length]) ? setTypedText(typedText.concat(typed)) : null
                return  setTypedText(typedText.concat(typed))
        }
    }

    let splitted = typedText.split('')
    useEffect(()=>{
        if( typed !== undefined ) {
            console.log(typed)
            handleTyped()
        }

    splitted = typedText.split('')

    },[typed])

    return(
        <div className="relative" >
            <div  className="absolute top-0 w-[700px] h-full text-2xl rounded-xl border-2 border-transparent p-5 opacity-70 flex flex-wrap z-10" >
                {splitted.map((el:any, index:number)=>{
                    return ((el === sample_text[index]) || el === ' ') ? <span className='text-accent'  >{el}</span> :  <span className='text-red'  >{sample_text[index]}</span>
                })}
                {/* <textarea className="bg-transparent w-full h-full text-accent outline-none wrap" name="typed" id="" value={typedText} /> */}
            </div>
            <div  className="relative break-all top-0 w-[700px] text-2xl rounded-xl border-2 border-dark_grey p-5 opacity-30 flex flex-wrap wrap" >
                { sample_text }
            </div>
        </div>
    )
}


export default TextBox