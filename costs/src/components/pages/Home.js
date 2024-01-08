import styles from './Home.module.css'
import savings from '../../img/savings.svg'

const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <a href="/">Criar Projeto</a>
      <img src={savings} alt="Costs"></img>
    </section>
  )
}

export default Home
