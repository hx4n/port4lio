import React, { useEffect, useState } from 'react'
import Card from './Card'

const Projects = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function getProjects() {
      await fetch('https://api.github.com/users/hx4n/repos')
        .then(res => res.json())
        .then(data => setData(data))
    }
    getProjects()
  }, [])

  return (
    <div className='mx-auto container'>
        <h1 className='text-2xl flex items-center justify-center my-10'>My Projects</h1>
        <div>
          {data && data.map((item, index) => {
            return (
              <div className='grid grid-cols-2' key={index}>
                {/* <Card name={item.name} desc={item.description} url={item.html_url} topics={item.topics} /> */}
                {item.name !== "hx4n" ? item.name !== "Portfolio-website" ? item.fork !== true ? <Card name={item.name} desc={item.description} url={item.html_url} topics={item.topics} /> : null : null : null}
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Projects