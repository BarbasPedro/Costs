import styles from './Select.module.css'

const Select = ({ text, type, name, options, handleOnChange, value}) => {
    return (
      <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <select type={type} name={name} onChange={handleOnChange} value={value || ''}>
          <option disabled>
            Selecione uma opção
          </option>
            {options.map((option) => (
              <option
                value={option.id}
                key={option.id}
              >
                {option.name}
              </option>
            ))}
        </select>
      </div>
    )
  }

  export default Select
