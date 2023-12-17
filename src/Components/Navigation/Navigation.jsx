import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={`${styles.navigation}`}>
        <div className="logo">
            <img src="/Images/Logo-image.png" alt="Logo Image"/>
        </div>

        <ul>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </ul>
    </nav>
  )
}

export default Navigation