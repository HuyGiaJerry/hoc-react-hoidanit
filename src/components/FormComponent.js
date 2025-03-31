import React, { useState } from 'react';

const FormComponent = () => {
    const [name, setName] = useState('Gia Huy')
    const [age, setAge] = useState(20)

    const handleOnchangeName = (event) => {
        setName(event.target.value)
    }
    const handleOnchangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleSubmitForm = (event) => {
        event.preventDefault()
        console.log(name,age)
    }
    
    return (
        <div>
            <h1>Form của {name}</h1>
            <form>
                <input
                    type='text'
                    value={name}
                    onChange={handleOnchangeName}
                />
                <br></br>
                <input
                    type='number'
                    value={age}
                    onChange={handleOnchangeAge}
                />
                <br></br>
                <button onClick={handleSubmitForm}>Submit</button>
            </form>
        </div>
    )
}

export default FormComponent