import React from "react";
import './partthree.scss'
import product1 from '../assets/images/img-vitalinea-griego.png'
import product2 from '../assets/images/img-vitalinea-sin-azucar.png'
import product from '../assets/images/bote-fresa-cut.png'
import freaseRecto from '../assets/images/bote-fresa-recto.png'

export default function PartThree(props) {
  let width = window.innerWidth;
  return (
    <div className="contentThree">
      <h2 className="titleContentThree">LA FAMILIA VITALÍNEA</h2>
      <div className="contentImages">
        <div className="individualImage">
          <img src={product1} alt="img-vitalinea-griego" className="image1" />
          <p>Vitalínea Griego</p>
        </div>
        <div className="individualImage">
          <img src={product2} alt="img-vitalinea-sin-azucar" className="image2"/>
          <p>Vitalínea sin Azúcar</p>
        </div>
        <div className="individualImage">
         <img src={ width < 600 ?  product : freaseRecto} alt="bote-fresa" className="image3"/>
          <p className="lastItem">{width < 600 ? 'Vit' : 'Vitalínea Bebible'}</p>
        </div>
      </div>
    </div>
  );
}
