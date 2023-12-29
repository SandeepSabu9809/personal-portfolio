import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/sandeep-sabu-4611b9266/" target='blank'><SiLinkedin /></a>
      <a href="https://github.com/SandeepSabu9809" target='blank'><SiGithub /></a>
      <a href="https://www.instagram.com/sandeep_pachakattil/?next=%2F" target='blank'><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials
