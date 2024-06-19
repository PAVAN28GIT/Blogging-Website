import { faDiscord, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const Footer = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <div className={`${darkMode ? 'bg-[#212E35]' : ''} transition-all duration-300 footer`}>
        <div className="image pt-4 lg:mt-0">
          <Image width={500} height={500} className='w-full' src='/footer2.svg' alt="footer" />
        </div>

        <div className="details pb-10 px-4 lg:px-0 lg:pl-24 w-full text-white bg-[#0F6292]">
          <div className="wrapper space-y-6 lg:space-y-0 flex-col lg:flex-row w-fit lg:space-x-20 lg:mx-auto flex">

            <div className="vishal lg:px-24 space-y-5 lg:w-1/2">
              <h3 className='font-Dancing-script text-7xl'>Pavan Kumar K</h3>
              <p className='text-xl font-jost'>I'm  a manga addict who codes between sets at the gym, occasionally pausing to ponder if anime characters would make good programmers too.</p>
            </div>

            <div className="projects space-y-6 lg:pl-12 lg:w-1/2">
              
              <div className="ml-2 socials flex space-x-6">
                <Link target={'_blank'} href='https://github.com/PAVAN28GIT'>
                  <FontAwesomeIcon className='text-2xl hover:text-black transition-all duration-300' icon={faGithub} />
                </Link>
            
                <Link target={'_blank'} href='https://www.linkedin.com/in/pavan-kumar-k-/'>
                  <FontAwesomeIcon className='text-2xl hover:text-black transition-all duration-300' icon={faLinkedin} />
                </Link>
               
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer
