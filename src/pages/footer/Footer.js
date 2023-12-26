import React from "react";
import "./css/Footer.css";
import witcherEmblemImg from "../main_screen/img/witcher_emblem_img.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <div className="Footer-content-imageAndName">
          <img className="witcherEmblem" src={witcherEmblemImg}></img>
          <p className="textStyle">The Witcher Shop</p>
        </div>
        <div className="Footer-content-right">
          <p className="Footer-content-right-topText">
            Мост между вашим желанием и множеством возможностей, где качество
            встречает удобство, а выбор становится персональным приключением
          </p>
		  <hr className="Footer-content-right-line"></hr>
        </div>
      </div>
    </div>
  );
}

export default Footer;