
import styles from "./ButtonIcon.module.scss";

interface IntButtonIcon {
  HandleOnclick: any;
  icon: string;
  typeButton: string;
}

const ButtonIcon = ({ HandleOnclick, icon, typeButton }: IntButtonIcon) => {

  var buttonboolean = true;
  if (typeButton === "square") {
    buttonboolean = true;
  }

  if (typeButton === "circle") {
    buttonboolean = false;
  }

  const square = styles.square;
  const circle = styles.circle;

  return (
    <div className={buttonboolean ? square : circle}>
      <span className="material-symbols-outlined" onClick={HandleOnclick}>
        {icon}
      </span>
    </div>
  );
};

export default ButtonIcon;
