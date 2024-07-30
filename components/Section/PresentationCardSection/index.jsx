import { username } from "../../../src/data/user"
import styles from "./style.module.css"
import banner from "../../../src/assets/banner-img.png"

export const PresentationCardSection = () => {
    return(
        <section className={styles.PresentationCardContainer}>
          <div className={styles.PresentationCardDiv}>
            <h2 className={styles.PresentationCardName}>{username}</h2>
            <h1 className={styles.PresentationCardTittle}>Bem-vindo ao Meu Portifólio</h1>
            <p className={styles.PresentationCardtext}>Imerso em linhas de código e inquieto pela busca incessante do conhecimento, ele é como um devorador de desafios, esculpindo seu caminho para se tornar um desenvolvedor junior, onde cada bug encontrado é uma oportunidade de aprendizado.</p>
            <button className={styles.PresentationCardButton}>Saiba  mais</button>
          </div>
        <img src={banner} alt="Baner" className={styles.PresentationCardImg}/>
      </section>
    )
}