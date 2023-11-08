import React from 'react'
import '../App.css'

const Contact = () => {
  return (
    <div id='socials'>
        <h1 className='flex justify-center items-center text-3xl text-teal-100'>Socials</h1>
        <div className='flex flex-col justify-center items-center mt-32 mb-32 pb-12'>
          <h1 className="uppercase flex text-7xl linkn link"><a target='_blank' href='https://linkedin.com/in/heman-li'>Linkedin</a></h1>
          <h1 className='uppercase flex text-7xl twt link'><a target='_blank' href='https://twitter.com/hemansakkthivel'>Twitter</a></h1>
          <h1 className='uppercase flex text-7xl git link'><a target='_blank' href="https://github.com/hx4n">Github</a></h1>
        </div>
    </div>
  )
}

export default Contact