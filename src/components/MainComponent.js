import React, { useState } from 'react'
import FirstComponent from './FirstComponent'
import FormComponent from './FormComponent'
import IncreaseComponent from './IncreaseComponent'
import PropsComponent from './PropsComponent'
import ListArrayComponent from './ListArrayComponent'
import PropsFunctionComponent from './PropsFunctionComponent'

const MainComponent = () => {

    const [listUsers,setListUsers] = useState([
        { id: 10, name: 'Hai Yen', age: 20 },
        { id: 120, name: 'Jerry Nguyen', age: 21 },
        { id: 2, name: 'Trinh Le', age: 17 },
        { id: 99, name: 'Bao Anh', age: 19 },
    ])

    const handleAddList = (userObj) => {
        setListUsers ( [userObj,...listUsers] )
    }
    const handleDeleteList = (id) => {
        setListUsers ( listUsers.filter(user => user.id !== id) )
    }
    return (
        <>
            {/* <FirstComponent />
            <IncreaseComponent />
            <FormComponent />
            <PropsComponent namee='Test name' age={100} /> */}
            <PropsFunctionComponent handleAddList={handleAddList} />
            <ListArrayComponent listUsers={listUsers} handleDeleteList={handleDeleteList} />
            
        </>
    )
}

export default MainComponent