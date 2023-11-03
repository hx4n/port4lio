import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center my-[20%]'>
        <div>
            <img className='w-[25%] rounded-full mx-auto block' src="../../assets/coolcat.jpeg" alt="pfp" />
        </div>
        <div>
            <h1 className='my-3 text-3xl'>Hi, I'm Hemansakkthivel 👋🏻</h1>
        </div>
        <div>
            <h1 className='text-md'>I write some code to innovate something valuable for the society 🧑🏼‍💻</h1>
        </div>
    </div>
  )
}

export default Home