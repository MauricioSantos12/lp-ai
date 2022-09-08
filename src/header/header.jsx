import React from "react";
import "./header.scss";
import logo from "../assets/images/logo-header.png"
import {Menu} from "react-feather";
import logoFb from '../assets/images/img-social-facebook.png'
import logoInsta from '../assets/images/img-social-instagram.png'
import logoYoutube from '../assets/images/img-social-youtube.png'

export default function Header() {
  let width = window.innerWidth;
  return (
    <div className="header">
      <div className="contentHeader"> 
      {
        width > 600 ?
        <>
        <img src={logo} alt="logo-header" className="imgLogoHeader" />
        <div className="dFlexRow">       
          <div className="containerItemsMenu">
            <p>Nuestros productos</p>
            <p>Disfruta cuidarte</p>
            <p>Blog</p>
          </div>
          <div className="containerItemsMenu">
            <img src={logoFb} alt="logoFb" />
            <img src={logoInsta} alt="logoInsta" />
            <img src={logoYoutube} alt="logoYoutube" />
          </div>
        </div>
        </>
        :
        <>
          <img src={logo} alt="logo-header" className="imgLogoHeader" />
          <Menu className='iconMenuHeader'  />
        </>
      }
        
      </div>
      
    </div>
  );
}
