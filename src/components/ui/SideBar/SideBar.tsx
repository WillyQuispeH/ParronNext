import UIContext from "@/context/ui";
import React, { useContext } from "react";
import menuOpcion from "@/data/menuOpcion";

import styles from "./SideBar.module.scss";

const SideBar = () => {

  const { sidebar } = useContext(UIContext);

  return (
    <div className={styles.SideBar} style={{ left: sidebar ? "250px" : "0px" }}>
      {menuOpcion.map((item: any, idx: number) => (
        <div key={idx}>
          <h1>{item.seccionText}</h1>
          <ul>
            {item.options.map((opcionsitem: any, opcionsidx: number) => (
              <li key={opcionsidx}>{opcionsitem.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
