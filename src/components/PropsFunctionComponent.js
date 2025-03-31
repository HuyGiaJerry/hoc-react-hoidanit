import React, { useState } from 'react'

const PropsFunctionComponent = (props) => {
    const [name, setName] = useState('Gia Huy')
    const [age, setAge] = useState(20)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleAddList(
            {
                id: (Math.floor(Math.random() * 100) + 1) + '-random',
                name: name ,
                age: age
            }
        )
    }

    return (
        <>
            <form>
                <h1>Form Props Function</h1>
                <label>Name: </label>
                <input
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <br></br>
                <label>Age: </label>
                <input
                    type='number'
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                />
                <br></br>
                <button onClick={handleSubmit}>Add New</button>
            </form>
        </>
    )
}

export default PropsFunctionComponent