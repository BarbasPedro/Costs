import styles from './Select.module.css'

const Select = ({ text, type, name, options, handleOnChange, value}) => {
    return (
      <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <select type={type} name={name}>
          <option disabled>
            Selecione uma opção
          </option>
        </select>
      </div>
    )
  }

  export default Select
