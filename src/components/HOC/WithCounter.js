import React from 'react'


const WithCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 value: 0
            }
            this.increament = this.increament.bind(this)
        }
    
        increament(){
            this.setState((prevState) => ({
                value: prevState.value +1
            }))
        }
        
        render(){
            return <OriginalComponent value={this.state.value} increament={this.increament} {...this.props} />
        }
    }
    return NewComponent
}

export default WithCounter