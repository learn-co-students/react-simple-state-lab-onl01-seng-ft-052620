import React, {Component} from 'react';

class Cell extends Component{
   state = {
       color: this.props.value
   }

    color = () => {
        this.setState({
            color: '#333'
        })
    }
    
    render(){
        return(
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.color}></div>
        )
    }
}

export default Cell;