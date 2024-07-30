import headerImg from "../../src/assets/portfolio.png"
import styles from "./style.module.css"

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
        <img src={headerImg} alt="Portifólio" className={styles.headerImg}/>
        <nav className={styles.headerNav}>
          <a href="" className={styles.headerAchor}>Sobre</a>
          <a href="" className={styles.headerAchor}>Slack</a>
          <a href="" className={styles.headerAchor}>Projetos</a>
        </nav>
        <button className={styles.headerButton}>Contatos</button>
      </header>
    )
}