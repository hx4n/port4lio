import React from 'react'

const Card = ({name, desc, url, topics}) => {
  return (
    <>
        <div className='lg:w-96 mx-auto my-6 px-10 py-4 bg-gray-600 rounded-lg'>
            <div className='flex'>
                <div className='flex flex-col'>
                    <h1 className='text-xl mb-1'>{name}</h1>
                    <h2 className='text-md w-64'>{desc}</h2>
                </div>
                <div className='flex ml-6'>
                    <a href={url}><img width="20px" src="../../assets/url.svg" alt="url" /></a>
                </div>
            </div>
            <div className='flex'>
                {topics.map((item, index) => {
                    return (
                        <div key={index} className='flex'>
                            <h3 className='mr-2 mt-2 text-teal-500 text-sm'>{item.toUpperCase()}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Card