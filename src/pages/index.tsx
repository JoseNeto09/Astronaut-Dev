import Head from 'next/head';
import React from 'react';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
    <Head>
     <title>Apaixonado por tecnologia - Astronaut Dev</title>
    </Head>
     <main className={styles.container}>
     <div className={styles.containerHeader}>
      <section className={styles.ctaText}>
        <h1>Levando você ao proximo nivel</h1>
         <span>Bem vindo nosso Astronauta! aqui temos Uma platarforma com cursos que vão do zero até o profissional, entre no nosso foguete e faça uma viagem!!<br></br></span>
        <a>
          <button>
            LIGANDO MOTORES!
          </button>
        </a>
      </section>
      <img src="/images/banner-conteudos.png" alt="" />
        </div>
        <hr className={styles.divisor}/>
        <div className={styles.sectionContent}>
            <section>
              <h2>Aprenda criar aplicativos para possiveis portifolio com android e ios</h2>
              <span>Você vai descobrir o jeito mais moderno e pratico de desenvolver apps nativos para ios e Android com reactNative</span>
            </section>
            <img src="/images/financasApp.png" alt="Conteudos mobile" />
        </div>
        <hr className={styles.divisor}/>
        
        <div className={styles.sectionContent}>
        <img src="/images/webDev.png" alt="Desenvolvimento de aplicação Wb" />
            <section>
              <h2>Aprenda criar Sistemas Web</h2>
              <span>Criar sistemas web, sites usando tecnologias mais modernas e requisitados pelo mercado</span>
            </section>
        </div>
     </main>
    </>
  )
}
