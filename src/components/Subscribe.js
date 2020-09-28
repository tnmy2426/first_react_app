import React, { Component } from 'react';

class Subscribe extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Subscribe Here Please'
        }
    }

    changeOnClickButton(){
        this.setState({
            message:'Successfully Subscribed! Thanks !'
        })
    }
    
    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={ () => {this.changeOnClickButton()}}>Subscribe!</button>
            </div>
        )
    }
}

export default Subscribe