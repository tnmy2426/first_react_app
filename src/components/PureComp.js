import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             id: 0
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                id : this.state.id +1
            })
        },2000) 
    }
    
    render() {
        console.log("Rendering")
        return (
            <div>
                <h1> Id : {this.state.id} </h1>
            </div>
        )
    }
}

export default PureComp
