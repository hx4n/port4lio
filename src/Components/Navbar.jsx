import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center mt-3'>
        <div className='flex items-center'>
            <img className='cursor-pointer' src="../../assets/message.svg" alt="msg" />
            <div><a href='mailto:hemansakkthivel04@gmail.com'>Get in touch</a></div>
        </div>
        <div>
            <ul className='flex items-center'>
                <li className='mx-3'><a href='#'>home</a></li>
                <li className='mx-3'><a href='#about'>about</a></li>
                <li className='mx-3'><a href='#projects'>projects</a></li>
                <li className='mx-3'><a href='#socials'>socials</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar