import React, { Component } from 'react'
import Matrix from './Matrix'
class Cell extends Component{
    constructor(props){
        console.log(props);
        super()
        this.state ={
            color: props.value
        }
    }

    changeColor= () => {
        this.setState({
            color: '#333'
        })
    }

    render(){
        console.log(this.props.value);
        return(
        <div className='cell' onClick={this.changeColor} style ={{backgroundColor: this.state.color}}></div>
        )
    }
}
export default Cell