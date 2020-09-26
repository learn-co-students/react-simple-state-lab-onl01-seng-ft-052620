



export default class Cell extends Component {
constructor(props) {
    super()
    this.state = {
        color: props.value
    }
}

clickEvent = () => {
    this.setState({
        color: '#333'
 
    })
}


render() {
    return (
      <div className='cell' onClick={this.clickEvent} style={{backgroundColor: this.state.color}} >
 
      </div>
    )
  }
  
}
