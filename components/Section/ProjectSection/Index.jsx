import { ProjectCard } from "./ProjectCard"
import styles from "./style.module.css"

export const ProjectSection = () => {
    return (
        <section className={styles.projectsContainer}>
        <h2 className={styles.projectsTittle}>Projetos</h2>
        <ul className={styles.projectsList}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </ul>
      </section>
    )
}