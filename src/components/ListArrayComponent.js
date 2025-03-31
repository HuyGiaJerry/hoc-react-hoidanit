import React, { useState ,useEffect} from 'react';
import './ListArray.scss';
import logo from '../logo.svg';
import { use } from 'react';
const ListArrayComponent = (props) => {
    const [showList, setShowList] = useState(true);
    const [txtShow, setTxtShow] = useState('Hide');
    const handleShowList = () => {
        setShowList(!showList);
        if (showList) {
            setTxtShow('Show');
        } else {
            setTxtShow('Hide');
        }
    }
    console.log(">>> call me render")
    useEffect(() => {
        if(props.listUsers.length === 0){
            alert('List is empty')
        }
        console.log(">>> call me useEffect")

    }, [props.listUsers]
    )
    return (
        <div className='list-array'>
            <div>
                <img src={logo}/>
            </div>
            <div>
                <br></br>
                <h1>List Array and Condition</h1>
                <h3 onClick={handleShowList}>{txtShow} list :</h3>
            </div>
            {showList &&
                <div>
                    {props.listUsers.map((user) => {

                        return (
                            <div key={user.id} className={+user.age > 18 ? 'pink' : 'green'}>
                                
                                <br></br>
                                <h3>My Name : {user.name}</h3>
                                <h3>My Age : {user.age}</h3>
                                <button onClick={() => props.handleDeleteList(user.id)}>X</button>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}
export default ListArrayComponent