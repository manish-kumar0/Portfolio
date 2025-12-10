import React from 'react';
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/manish-kumar-48600030b/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/manish-kumar0" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://x.com/Manish27582827" target="_blank" rel="noreferrer"><BsTwitter /></a>
      <a href="https://www.facebook.com/profile.php?id=100068583256430" target="_blank" rel="noreferrer"><FaFacebook /></a>
      <a href="https://www.instagram.com/manish_singh_1152" target="_blank" rel="noreferrer"><FaInstagram /></a>
      <a href="https://leetcode.com/u/Manishsingh886014/" target="_blank" rel="noreferrer"><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials