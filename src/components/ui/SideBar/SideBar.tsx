import UIContext from "@/context/ui";
import React, { useContext } from "react";
import menuOpcion from "@/data/menuOpcion";
import { useRouter } from "next/router";

import styles from "./SideBar.module.scss";

const SideBar = () => {
  const router = useRouter();

  const { sidebar , setSidebar } = useContext(UIContext);

  const HandleClickOption=(text :string)=>{
    router.push(text);
    setSidebar(!sidebar);
  }
  


  return (
    <div className={styles.SideBar} style={{ left: sidebar ? "250px" : "0px" }}>
      {menuOpcion.map((item: any, idx: number) => (
        <div key={idx}>
          <h1>{item.sectionText}</h1>
          <ul>
            {item.options.map((optionsitem: any, optionsidx: number) => (
              <li key={optionsidx} onClick={()=>HandleClickOption(optionsitem.path) } >{optionsitem.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
