import React, { useEffect, useState } from "react";
import "./css/Cart.css";
import CardSetItemVertical from "../card_set_item_vertical/CardSetItemVertical";
import image from "../main_screen/img/Placeholder_img.png"

function NavMenu() {
  return (
    <div className="Cart-Main">
      <div className="Cart-Main-Header">Корзина</div>
      <div className="Cart-Main-ItemsAndCost">
        <div className='Cart-Main-ItemsAndCost-Items'>
          <CardSetItemVertical imageSrc={image} productText='Кружка "Белый Волк"' price='$14.99'/>
          <CardSetItemVertical imageSrc={image} productText='Кружка "Белый Волк"' price='$14.99'/>
          <CardSetItemVertical imageSrc={image} productText='Кружка "Белый Волк"' price='$14.99'/>
          <CardSetItemVertical imageSrc={image} productText='Кружка "Белый Волк"' price='$14.99'/>
          <CardSetItemVertical imageSrc={image} productText='Кружка "Белый Волк"' price='$14.99'/>
        </div>
        <div className='Cart-Main-ItemsAndCost-Cost'>
            <div className='Cost-TopText'>
            <p className='Cost'>Стоимость: $34.99</p>
            <p className='Sale'>Скидка: $4.99</p>
            <p className='Payment'>К оплате: $30.00</p>
            </div>
            <div className='Cost-PurchaseButton'>
                <button className='Purchase-Button'>Заказать</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
