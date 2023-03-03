import styles from "./Button.module.scss"
interface IntButton{
    valor:string,
    width:string,
    height:string
}
const Button = ({valor,width, height}:IntButton) => {
  return (
    <div className={styles.button} style={{width, height}}>
        <button>{valor}</button>
    </div>
  )
}
export default Button