import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import { useHistory } from 'react-router-dom'

const NewProject = () => {
  //Permitirá fazer redirects nas páginas
  const history = useHistory()

  const createPost = (project) => {
    // o projeto tem alguns atributos e alguns deles iniciaremos zerados, para que sejam atribuidos ao longo do sistema.

    //initialize cost n' services
    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects",{
      //alteração dos headers
      method: "POST",
      headers:{
        'Content-Type': "application/json",
      },
        //para enviar os dados para o servidor iremos inserir os dodos no body e enviar como sting
        body: JSON.stringify(project)

    }).then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        //redirect
        history.push('/projects', {message: 'Projeto enviado com sucesso!!'})
      })
      .catch((err) => console.log(err));
    }
  return (
  <div className={styles.newproject_container}>
    <h1>Criar Projeto</h1>
    <p> Crie o seu projeto para depois adicionar os serviçoes</p>
    <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
  </div>)
}

export default NewProject
