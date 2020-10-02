import React, { Component } from 'react'

// shouldComponentUpdate
// componentDidMount

class Update extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value: 0
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    shouldComponentUpdate(nextProrps, nextState){
        if (nextState.value === this.state.value) {
            return false;
        } else {
            return true;
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.value === 5) {
            alert("ComponentDidUpdate Method Called!")
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                value: this.state.value +1
            })
        }, 2000);
    }
    
    render() {
        console.log('rendering')
        return (
            <div>
                value: {this.state.value}
            </div>
        )
    }
}

export default Update
