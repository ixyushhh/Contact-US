import {BiSolidMessage} from "react-icons/bi"
import styles from "./Button.module.css"

const Button = () => {
  return (
    <button className={styles.primary_btn}>
        <BiSolidMessage font-size="24px"/>
        VIA SUPPORT CHAT
        </button>
  )
}

export default Button