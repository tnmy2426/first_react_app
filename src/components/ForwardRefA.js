import React, { Component } from 'react'
import ForwardRefB from './ForwardRefB';

class ForwardRefA extends Component {
    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef();
        this.focusHandler = this.focusHandler.bind(this)
    }

    focusHandler(){
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <ForwardRefB ref={this.inputRef} />
                <button onClick={this.focusHandler}>Focus</button>
            </div>
        )
    }
}

export default ForwardRefA
