import React, { useEffect, useState } from "react";
import "./css/Error.css";
import errorImg from "./img/icon.png"



function Error() {
  return (
    <div className="Main-error">
      <div className="Main-error-wrapper">
        <img className="Main-error-wrapper-image" src={errorImg} />
        <p className="Main-error-wrapper-text">Ошибка: отсутствует соединение с сервером</p>
      </div>
    </div>
  );
}

export default Error;
