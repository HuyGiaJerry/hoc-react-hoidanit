import React, { useState } from 'react';

const IncreaseComponent = () => {
    // State
    const [count, setCount] = useState(0)

    const increaseCnt = () => {
        setCount(count + 1)
    }
    
        return (
            <div>
                <h1>State and Event</h1>
                <p>Số đếm hiện tại : {count} </p>
                <button onClick={increaseCnt}>Tăng</button>
                <button onClick={() => setCount(count - 1)}>Giảm</button>
                <button onMouseOver={() => console.log("Bien Count Hien Tai La: ", count)}>Giữ vào</button>
            </div>
        )
    }


    export default IncreaseComponent