import React, { useState } from 'react'

const Footer = () => {
    const [Value, setValue] = useState(0)
    const [Egg, setEgg] = useState("")
    const year = new Date().getFullYear()
    let checkValue = () => {
        if (Value === 10) {
            setEgg("Yay! You've won a prize :D, contact me to claim it!")
        }
    }

    let handleInput = () => {
        checkValue()
        setValue(Value + 1)
    }
    return (
    <div className='flex justify-center items-center'>
        <h1 className='my-3'> {year} | <button onClick={handleInput} className='text-teal-100'>easter egg</button> | <span className='text-cyan-300 cursor-pointer'> {Value}</span></h1>
        <h1 className='ml-3 text-md text-fuchsia-300'>{Egg}</h1>
    </div>
    )
}

export default Footer