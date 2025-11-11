function Button ({text, callback, type}){
    return (
        <>
            <button onClick={callback} type="type">
                {text}
            </button>
        
        </>

    )
}

export default Button




