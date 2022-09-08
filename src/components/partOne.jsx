import React from "react";
import './partOne.scss'
import boteFresa from '../assets/images/bote-fresa.png'
import fresa from '../assets/images/fresas.png'
// import fresaCut from '../assets/images/fresas-cut.png'
import logoSello from '../assets/images/sello-avalado.png'
import logoCal from '../assets/images/img-100-kcal.png'
import { ArrowDown } from 'react-feather'
import fresas2 from '../assets/images/img-fresas-2.png'

export default function PartOne() {
  let width = window.innerWidth;
  return (
    <div className="contentParOne">
        {
            width < 600 ?
            <>
            <img src={boteFresa} alt="bote-fresa" className="imgBoteFresa paddingPartOne" />
            <img src={fresa} alt="fresa" className="imgFresaLeftPartOne" />
            <img src={fresas2} alt="fresa" className="imgFresaRigth" />
            <div className="containerItems">
            <div className="separateItems">
                <p>Sabor: </p>
                <div className="options">
                    <span className="optionSelected">Fresa</span>
                    <span className="option">Guayaba</span>
                    <span className="option">Toronja</span>
                </div>
            </div>
            </div>
            <div className="containerText">
                <h2>Vitalínea® Bebible Fresa 217 gr.</h2>
                <p>¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de las personas que siempre están activas y quieren probar algo sano, rico y práctico.</p>
                <button>Comprar en Walmart</button>
            </div>
            <div className="containerLogos">
                <img className="imgLogoSello" src={logoSello} alt="logoSello" />
                <img className="imgLogoCal" src={logoCal} alt="logoCal" />
            </div>
            <div className="containerArrow">
                <div className="containerArrowDown">
                    <ArrowDown className="arrowDown" />
                </div>
            </div>
            </>
            :
            <>
                <div className="dFlexRow paddingPartOne">
                    <div className="dFlexColumn">
                    <img src={boteFresa} alt="bote-fresa" className="imgBoteFresa" /> </div>
                    <div className="dFlexColumn">
                        <img src={fresas2} alt="fresa" className="imgFresaTop" />
                        <img src={fresa} alt="fresa" className="imgFresaLeftPartOne" />
                        <div className="separateItems">
                        <p>Sabor: </p>
                        <div className="options">
                            <span className="optionSelected">Fresa</span>
                            <span className="option">Guayaba</span>
                            <span className="option">Toronja</span>
                        </div>
                        </div>
                        <div className="containerText">
                            <h2>Vitalínea® Bebible Fresa 217 gr.</h2>
                            <p>¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de las personas que siempre están activas y quieren probar algo sano, rico y práctico.</p>
                            <button>Comprar en Walmart</button>
                            <div className="containerLogos">
                                <img className="imgLogoSello" src={logoSello} alt="logoSello" />
                                <img className="imgLogoCal" src={logoCal} alt="logoCal" />
                            </div>
                            <img src={fresa} alt="fresa" className="imgFresaDownRigth" />
                            <div className="containerArrow">
                                <div className="containerArrowDown">
                                    <ArrowDown className="arrowDown" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        }
        
    </div>
  );
}
