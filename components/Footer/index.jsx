import whatsappIcon from "../../src/assets/whatsapp-icon.png"
import linkedinIcon from "../../src/assets/linkedin-icon.png"
import gitHubIcon from "../../src/assets/github-icon.png"
import { user } from "../../src/data/user"
import styles from "./style.module.css"

export const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
          <div className={styles.ContactDiv}>
            <h2 className={styles.footerTitle}>Contato</h2>
            <div className={styles.footerDiv}>
              <img src={whatsappIcon} alt="" className={styles.footerimg}/>
              <img src={linkedinIcon} alt="" className={styles.footerimg}/>
              <img src={gitHubIcon} alt="" className={styles.footerimg}/>
            </div>  
        </div>
        <p className={styles.FooterText}>Todos os direitos reservados - {user}</p>
      </footer>
    )
}