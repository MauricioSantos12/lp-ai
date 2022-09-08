import React from "react";
import './partTwo.scss'
import fresa from '../assets/images/fresas.png'
import fresaHead from '../assets/images/fresa-head.png'
import fr1 from '../assets/images/fr1.png'
import fr2 from '../assets/images/fr2.png'
import fr3 from '../assets/images/fr3.png'
import fr4 from '../assets/images/fr4.png'
import fr5 from '../assets/images/fr5.png'


export default function PartTwo() {
  let width = window.innerWidth;
  return (
    <div className="contentParTwo">
      {
        width < 600 ?
          <>
            <div className="contentText">
              <h2 className="Informacin-nutrimen">Información nutrimental</h2>
              <span className="Vitalnea-Bebible-G">Vitalínea® Bebible Guayaba 217gr Valor promedio por porción de 217gr Porciones por envase: 1</span>
            </div>
            <div className="ingredients">
              <span className="Ingredientes-Leche">Ingredientes:
                <p className="text-style-1">Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos lácticos.</p>
              </span>
            </div>
            <img src={fresa} alt="logo-header" className="logoFresaPartTwo" />
            <img src={fresaHead} alt="fresaHead" className="fresaHead"/>
            <div className="contentList">
              <div className="list">
                <p>Contenido energético kJ/kcal </p>
                <p>Proteínas (g)	</p>
                <p>Grasas (lípidos) (g)</p>
                <p>Grasas saturadas (g)</p>
                <p>Carbohidratos (Hidratos de carbono) (g)	</p>
                <p>Azúcares (g)</p>
                <p>Azúcares añadidos (g)</p>
                <p>Fibra dietética (g) </p>
                <p>Sodio (mg)</p>
                <p>Calcio (mg)</p>
                <p>%VNR*</p>
              </div>
              <div className="list">
                <p>413,2/97,9</p>
                <p>5.3</p>
                <p>2.1</p>
                <p>1.4</p>
                <p>12.4</p>
                <p>7.7</p>
                <p>0.1</p>
                <p>0.0</p>
                <p>92.7</p>
                <p>199.6</p>
                <p>22</p>
              </div>
            </div>
          </>
          :
          <>
              <img src={fr1} alt="fr1" className="fr1" />
              <img src={fr2} alt="fr2" className="fr2" />
              <img src={fr3} alt="fr3" className="fr3" />
              <img src={fr4} alt="fr4" className="fr4" />
              <img src={fr5} alt="fr5" className="fr5" />
              <div className="contentText">
                <h2 className="Informacin-nutrimen">Información nutrimental</h2>
              </div>
              <div className="dFlexColumnParTwo">
                <div className="dFlexColumnLeft">
                  <div className="contentTextWithoutMarginTop">
                    <span className="Vitalnea-Bebible-G">Vitalínea® Bebible Guayaba 217gr Valor promedio por porción de 217gr Porciones por envase: 1</span>
                  </div>
                  <div className="ingredients">
                    <span className="Ingredientes-Leche">Ingredientes:
                      <p className="text-style-1">Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos lácticos.</p>
                    </span>
                  </div>
                </div>
                <div className="dFlexColumn">
                  <div className="contentList">
                    <div className="list">
                      <p>Contenido energético kJ/kcal </p>
                      <p>Proteínas (g)	</p>
                      <p>Grasas (lípidos) (g)</p>
                      <p>Grasas saturadas (g)</p>
                      <p>Carbohidratos (Hidratos de carbono) (g)	</p>
                      <p>Azúcares (g)</p>
                      <p>Azúcares añadidos (g)</p>
                      <p>Fibra dietética (g) </p>
                      <p>Sodio (mg)</p>
                      <p>Calcio (mg)</p>
                      <p>%VNR*</p>
                    </div>
                    <div className="list">
                      <p>413,2/97,9</p>
                      <p>5.3</p>
                      <p>2.1</p>
                      <p>1.4</p>
                      <p>12.4</p>
                      <p>7.7</p>
                      <p>0.1</p>
                      <p>0.0</p>
                      <p>92.7</p>
                      <p>199.6</p>
                      <p>22</p>
                    </div>
                    </div>
                </div>
              </div>
          </>
      }
      
    </div>
  );
}
