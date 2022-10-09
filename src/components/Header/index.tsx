import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';

import { ActiveLink } from '../ActiveLink';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <ActiveLink href="/" activeClassName={styles.active}>
                    <a>
                        <Image src={logo} alt="AstronautDev" />
                    </a>
                </ActiveLink>    
                
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <a>home</a>
                    </ActiveLink>
                    <ActiveLink href="/post" activeClassName={styles.active}>
                        <a>Conteudo</a>
                    </ActiveLink>
                    <ActiveLink href="/sobre" activeClassName={styles.active}>
                        <a>Quem somos?</a>
                    </ActiveLink>
                </nav>
                
                <a className={styles.readyButton} type="button" href="https://sujeitoprogramador.com">Começar</a> 
            
            </div>
        </header>
    )
}