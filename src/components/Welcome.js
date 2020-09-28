import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div>
                <h2> Welcome Again!! { this.props.name } and age is: {this.props.age}</h2>
                <p>This is class component.</p>
            </div>
        )
    }
}

export default Welcome