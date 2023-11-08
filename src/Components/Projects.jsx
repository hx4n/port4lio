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
    <div id="projects" className='mx-auto my-24'>
        <h1 className='text-3xl flex items-center justify-center my-10 text-teal-100'>My Projects</h1>
        <div>
          {data && data.map((item, index) => {
            return (
              <div key={index}>
                {/* <Card name={item.name} desc={item.description} url={item.html_url} topics={item.topics} /> */}
                {item.name !== "hx4n" ? item.name !== "personal-website" ? item.fork !== true ? <Card name={item.name} desc={item.description} url={item.html_url} /> : null : null : null}
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Projects