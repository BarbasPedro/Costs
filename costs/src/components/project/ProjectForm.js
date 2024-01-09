import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

const ProjectForm = ({btnText}) => {
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
        />
        <SubmitButton text={btnText}/>
    </form>
    )
}

export default ProjectForm
