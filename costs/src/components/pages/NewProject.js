import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

const NewProject = () => {
  return (
  <div className={styles.newproject_container}>
    <h1>Criar Projeto</h1>
    <p> Crie o seu projeto para depois adicionar os serviçoes</p>
    <ProjectForm btnText="Criar Projeto"/>
  </div>)
}

export default NewProject
