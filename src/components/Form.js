import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            comment: "",
            colors: "green"
        }
        this.commentChangeHandler = this.commentChangeHandler.bind(this)
        this.nameChangeHandler = this.nameChangeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.colorHandler = this.colorHandler.bind(this)
    }

    nameChangeHandler(event) {
        this.setState({
            name: event.target.value
        })
    }
    commentChangeHandler(event){
        this.setState({
            comment: event.target.value
        })
    }
    submitHandler(event){
        alert(`
        Name: ${this.state.name}
        Comment: ${this.state.comment}
        colors: ${this.state.colors}`)
        event.preventDefault()
        this.setState({
            name: "",
            comment: "",
            colors: ""
        })
    }
    colorHandler(event){
        this.setState({
            colors: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Name</label>
                        <input type='text' value={this.state.name} onChange={this.nameChangeHandler} />
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea value={this.state.comment} onChange={this.commentChangeHandler}></textarea>
                    </div>
                    <div>
                        <select value={this.state.colors} onChange={this.colorHandler}>
                            <option value='red'>Red</option>
                            <option value='blue'>Blue</option>
                            <option value='green'>Green</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
