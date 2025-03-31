// class component
// function component
import React from 'react';

class FirstComponent extends React.Component {
    // JSX (Javascript XML): HTML in Javascript 
    constructor(props) {
        super(props)
        this.state = {
            currentTime: new Date().toLocaleString()
        }
    }
    tick(){
        this.setState({
            currentTime: new Date().toLocaleString()
        })
    }

    componentDidMount() {
        this.timeId = setInterval(() => 
            this.tick(),1000)
        }
    componentWillUnmount() {
        clearInterval(this.timeId)
    }


    render() {
        return (
            <div>
                <h1>First Component Get RealTime</h1>
                <p>Current Time: {this.state.currentTime}</p>
            </div>
        );
    }
}
    

export default FirstComponent

