import { useEffect, useState } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

const ProjectForm = ({btnText}) => {

  const [categories, setCategories] = useState([])
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

  return (
    <form className={styles.form}>
        <Input
          type="text"
          name="name"
          text="Nome do Projeto:"
          placeholder="Insira o nome do Projeto"
        />
        <Input
          type="number"
          name="budjet"
          text="Orçamento disponível"
          placeholder="Insira o orçamento disponível"
        />
        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
        />
        <SubmitButton text={btnText}/>
    </form>
    )
}

export default ProjectForm
