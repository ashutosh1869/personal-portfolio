import React from 'react'
import {  useSelector } from 'react-redux'

function Contact() {
  const isLightTheme = useSelector((state) => state.theme.theme === "light");
  return (
    <div id='contact' className={`${isLightTheme ? 'bg-white' : 'bg-zinc-800'} mt-8 h-fit w-fit mx-auto p-8`}>
      <div>
        <h2 className={`${isLightTheme ? 'text-black' : 'text-white'} text-xl font-bold`}>I'm also interested in freelance opportunities</h2>
        <div className='w-fit rounded-md p-3 mx-auto mt-2'>
          <a href="mailto:ashutoshprem04@gmail.com?subject=I'm interested in hiring you for a project&body=Hi Ashutosh, I'm interested in hiring you for a project. Please let me know your availability. Thanks!">
            <button className={`${isLightTheme ? 'bg-gray-200 text-black' : 'bg-zinc-900 text-white'} p-2 px-8 rounded-md shadow-sm hover:shadow-yellow-600 text-xl transition-all`}>Tell me about your project</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact