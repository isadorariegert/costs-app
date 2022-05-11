import styles from './Select.module.scss';

function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.FormControl}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Select Opion</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select;