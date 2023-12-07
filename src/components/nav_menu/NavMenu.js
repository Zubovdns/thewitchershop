import React, { useEffect, useState } from "react";
import "./css/NavMenu.css";
import basketImg from "./img/basket_img.png";
import witcherEmblemImg from "./img/witcher_emblem_img.png";

function NavMenu() {
  const [isSticky, setIsSticky] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    setIsSticky(true);
    setImageUrl(witcherEmblemImg);
  }, []);

  return (
    <div className={`NavMenu ${isSticky ? "sticky" : ""}`}>
      {imageUrl && <img className="NavMenu-image" src={imageUrl} />}
      <a className="NavMenu-text" href="">
        Главная
      </a>
      <a className="NavMenu-text" href="">
        Категории
      </a>
      <a className="NavMenu-text" href="">
        О нас
      </a>
      <input type="text" className="NavMenu-input" />
      <a href="">
        <img className="NavMenu-icon" src={basketImg} />
      </a>
    </div>
  );
}

export default NavMenu;
