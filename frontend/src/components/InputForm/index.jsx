import "./styles.css"

const InputForm = ({ type, text, name, value }) => {
    return (
        <div className='form-input-wrapper'>
            <input
                type={type}
                name={name}
                id={name}
                className='form-input'
                value={value}
                placeholder={text}
            />
        </div>
    )
}

export default InputForm
