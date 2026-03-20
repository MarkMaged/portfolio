import React from 'react'
import logo from "../../assets/Fady_Gabriel_logo.png"
import { FaGithub, FaLinkedin,FaBehanceSquare,FaStackOverflow } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'



export default function Navbar() {
  return (
    <div>
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='w-10 mx-2' src={logo} alt="Fady Gabriel Logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/fady-gabriel-74522a253/" target='_blank'><FaLinkedin></FaLinkedin></a>
                <a href="https://github.com/FadyGabriel" target='_blank'><FaGithub></FaGithub></a>
                {/* <a href="https://www.behance.net/fadygabriel" target='_blank'><FaBehanceSquare></FaBehanceSquare></a> */}
                {/* <a href="https://stackoverflow.com/ " target='_blank'><FaStackOverflow></FaStackOverflow></a> */}
            </div>
        </nav> 
    </div>
  )
}
