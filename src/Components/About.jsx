import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <h1 className='text-3xl flex items-center justify-center my-10 text-teal-100'>About Me</h1>
        <div className='flex'>
            <div className='flex flex-col mr-6 border-2 p-4 rounded-lg'>
                <h1 className='mb-1 text-teal-200 text-2xl'>Education 💁🏻</h1>
                <h2 className='text-md w-64'>I’m currently pursuing my Bachelors in Electronics and Computer Engineering at Amrita School of Engineering, Kerala</h2>
            </div>
            <div className='flex flex-col ml-6 border-2 p-4 rounded-lg'>
                <h1 className='mb-1 text-teal-200 text-2xl'>Experience 🧑🏼‍💻</h1>
                <h2 className='text-md w-64'>I’m working as co lead to the development part of my club <a className='text-teal-100 bold' href="https://aseam.acm.org/" >ACM</a></h2>
            </div>
        </div>
    </div>
  )
}

export default About