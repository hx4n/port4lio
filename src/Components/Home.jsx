import React from 'react'

const Home = () => {
  return (
    <div id='home' className='flex flex-col items-center justify-center my-[20%]'>
        <div>
            <img className='w-[25%] rounded-full mx-auto block' src="../../assets/coolcat.jpeg" alt="pfp" />
        </div>
        <div>
            <h1 className='my-3 text-3xl'>Hi, I’m <span className='text-teal-100'>Heman</span>sakkthivel👋🏻</h1>
        </div>
        <div>
            <h1 className='text-md'>🧑🏼‍💻 I’m an electronics undergrad and opensource enthu, learning to code for fun✨</h1>
        </div>
    </div>
  )
}

export default Home