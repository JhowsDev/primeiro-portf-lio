import gitIcon from "../../../../src/assets/git-icon.png"
import styles from "./style.module.css"

export const ProjectCard = () => {
    return (
        <li className={styles.projectItem}>
            <img src={gitIcon} alt="Icone do GitHub" className={styles.projectImg}/>
            <h3 className={styles.projectTitle}>Projeto1</h3>
            <p className={styles.projectText}>Descrição do Projeto</p>
            <a href="" className={styles.projectAnchor}>Sabiba mais</a>
          </li>
    )
}