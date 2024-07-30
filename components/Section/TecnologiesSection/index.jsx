import { technologies } from "../../../src/data/technologies";
import { TecnologiesCard } from "./TecnologiesCard";
import styles from "./style.module.css"

export const TecnologiesSection = () => {
    return (
        <section className={styles.tecnologiesContainer}>
          <h2 className={styles.tecnologiesTittle}>Tecnologias</h2>
          <ul className={styles.tecnologiesList}>
            <TecnologiesCard tecnologies={technologies}/>
          </ul>
        </section>
    )
}