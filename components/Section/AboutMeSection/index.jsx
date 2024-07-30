import styles from "./style.module.css"

export const AboutMeSection = () => {
    return(
      <section className={styles.AboutMeContainer}>
        <h2 className={styles.AboutMeTittle}>Sobre Mim</h2>
        <p className={styles.AboutMetext}>Este dedicado estudante de programação é um arquiteto digital em ascensão, moldando um futuro onde cada linha de código é uma pedra fundamental para o edifício de sua carreira como programador. Navegando pelas complexidades das linguagens e frameworks, ele transforma desafios em oportunidades, construindo não apenas software, mas também resiliência e paixão. Seu horizonte é um panorama de possibilidades digitais, onde a aprendizagem é contínua, e cada projeto é uma tela em branco para a expressão de sua criatividade. Este aspirante a programador não apenas estuda código; ele forja seu próprio caminho, ansioso para o dia em que suas criações digitais se tornarão testemunhas tangíveis de seu sonho realizado.</p>
      </section>
    )
}