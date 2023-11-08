import React from 'react'

const Card = ({name, desc, url}) => {
  return (
    <>
        <div className='w-96 mx-auto my-6 px-10 py-4 bg-gray-600 rounded-lg'>
            <div className='flex'>
                <div className='flex flex-col'>
                    <h1 className='text-xl mb-1 text-teal-200'>{name}</h1>
                    <h2 className='text-md w-64'>{desc}</h2>
                </div>
                <div className='flex flex-col ml-6'>
                    <a href={url}><img width="20px" src="../../assets/url.svg" alt="url" /></a>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Card