import React from 'react';

const PropsComponent = (props) => {
    const {namee,age} = props
    return (
        <div>
            <h1>Props</h1>
            <h3>My Name : {namee}</h3>
            <h3>My Age : {age}</h3>
        </div>
    )
}

export default PropsComponent