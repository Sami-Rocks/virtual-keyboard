type KeyType = {
    figure:string
}

function Key({figure}:KeyType){
    return(
        <div className="rounded-md bg-white w-16 h-16 flex justify-center items-center" >
            {figure}
        </div>
    )
}


export default Key