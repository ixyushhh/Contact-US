import {BiSolidMessage} from "react-icons/bi"
import styles from "./Button.module.css"

const Button = (props) => {

  // We can use destructuring so that we don't have to return props again and again.
  const {isSecondary, text, icon, ...rest} = props;  // only with the help of rest we'll be able to see change in console after clicking on the button.

  return (

    <button {...rest} className={isSecondary ? styles.secondary_btn : styles.primary_btn}>
      {icon}
      {text}
      </button>
  )
}

export default Button