import React from 'react'
import styles from './Styles/Contato.module.css'
import foto from '../img//Telefone.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft" }>
      <Head title="Ranek | Contato" description="Entre em contato." />
      <img src={foto} alt="Carro" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>emailteste@hotmail.com</li>
          <li>+61 490 147 073</li>
          <li>Rua Esquina, 727</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
