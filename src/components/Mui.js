import React, {Component} from 'react'


class Mui extends Component{
    
    constructor(){
        super()
        this.state = {
            message: 'inputi sisu',
            sisu: ''
        }
    }
    handleChange = event => {
        this.setState({
            sisu: event.target.value

        })
      };
    render(){
        return (
            <div>
                <input
                    type="text"
                    id="message"
                    name="message"
                    onChange={this.handleChange}
                />
                <h2>{this.state.message} {this.state.sisu}</h2>
            </div>
        )
    }
}

export default Mui