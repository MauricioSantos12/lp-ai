import React from "react";
import "./footer.scss";
import logo1 from '../assets/images/logo-danone.png'
import logo2 from '../assets/images/logo-footer.png'

export default function Footer() {
  let width = window.innerWidth;
  return (
    <div className="footer">
      {
        width < 600 ?
        <>
          <div className="containerLogosFooter">
            <img src={logo1} alt="logo1" />
            <img src={logo2} alt="logo2" />
          </div>
          <div className="containerTextFooter">
            <p>Términos y condiciones| Políticas de privacidad | Aviso de privacidad</p>
            <p>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
          </div>
        </>
        :
        <>
          <div className="containerLogosFooter">
            <div className="dFlexRow">
              <img src={logo1} alt="logo1" />
              <div className="containerTextFooter">
                <p>Términos y condiciones| Políticas de privacidad | Aviso de privacidad</p>
                <p>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
              </div>
            </div>
            <img src={logo2} alt="logo2" />
          </div>
        </>

      }
      
    </div>
  );
}
