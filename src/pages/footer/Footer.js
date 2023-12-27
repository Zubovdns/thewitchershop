import React from "react";
import "./css/Footer.css";
import witcherEmblemImg from "../main_screen/img/witcher_emblem_img.png";
import ImageCall from "./img/ImageCall.png";
import ImageVK from "./img/ImageVK.png";
import ImageTG from "./img/ImageTG.png";

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
          <div className="Footer-content-right-bottom">
            <div className="ImageCall">
              <img className="ImageCallPng" src={ImageCall} />
              <p>The Witcher Shop</p>
            </div>
            <div className="ImageVK">
              <img className="ImageCallPng" src={ImageVK} />
              <p>The Witcher Shop</p>
            </div>
            <div className="ImageTG">
              <img className="ImageCallPng" src={ImageTG} />
              <p>The Witcher Shop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
