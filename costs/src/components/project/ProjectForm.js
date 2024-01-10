import { useEffect, useState } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

const ProjectForm = ({handleSubmit, btnText, projectData}) => {

  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})
  //fiz um request com fetch API para:
  useEffect (() => {
    fetch("http://localhost:5000/categories", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
    //Peguei os dados da responsta e transformei em json
    .then((resp) => resp.json())
    //utilizei o dado no meu Hook setCategories, mudei o valor de useState([]) para setCategories
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  const handleCategory = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
      },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
        <Input
          type="text"
          name="name"
          text="Nome do Projeto:"
          placeholder="Insira o nome do Projeto"
          handleOnChange={handleChange}
          value={project.name ? project.name : ''}
        />
        <Input
          type="number"
          name="budget"
          text="Orçamento disponível"
          placeholder="Insira o orçamento disponível"
          handleOnChange={handleChange}
          value={project.budget ? project.budget : ''}
        />
        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ''}
        />
        <SubmitButton text={btnText}/>
    </form>
    )
}

export default ProjectForm
