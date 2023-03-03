import UIContext from "@/context/ui";
import React, { useContext } from "react";

import styles from "./Header.module.scss";

const Header = () => {
  const { sidebar, setSidebar } = useContext(UIContext);

  const HanOnclick = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className={styles.header}>
      <div>
        <span
          id="btn_menu_lateral"
          className="material-symbols-outlined"
          onClick={HanOnclick}
        >
          menu
        </span>
      </div>

      <div>
        <span className="material-symbols-outlined"> monitoring </span>
        <span className="material-symbols-outlined"> qr_code_2 </span>
        <span className="material-symbols-outlined"> inbox </span>
        <span className="material-symbols-outlined"> person </span>
      </div>
    </div>
  );
};

export default Header;
