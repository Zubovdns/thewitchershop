import React, { useEffect, useState } from "react";
import "./css/Catalog.css";

function NavMenu() {
  return (
    <div className="Catalog-Main">
      <div className="Catalog-Main-Poster">
        <p>Black Friday</p>
        <hr></hr>
      </div>
      <div className="Catalog-Main-ItemsAndFilters">
        <div className="Catalog-Main-ItemsAndFilters-Items"></div>
        <div className="Catalaog-Main-ItemsAndFilters-Filters"></div>
      </div>
    </div>
  );
}

export default NavMenu;
