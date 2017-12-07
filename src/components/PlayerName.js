import React from 'react'

class PlayerName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: props.name,
      showInput: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleClick  = this.handleClick.bind(this)
    this.handleBlur   = this.handleBlur.bind(this)
  }
  
  handleClick() {
    this.setState({ ...this.state, showInput: true})
  }

  handleChange(e) {
    this.setState({ ...this.state, name: e.target.value })
  }

  handleBlur() {
    this.setState({...this.state, showInput: false}) 
  }
  
  render() {
    return (
      <div>
        {!this.state.showInput &&
          <p onClick={this.handleClick}>
            { this.state.name }
          </p>
        }
        {this.state.showInput &&
          <input type='text' value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} />
        }
      </div>
    )
  }
}

export default PlayerName
