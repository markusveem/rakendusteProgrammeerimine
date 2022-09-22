import React, {Component} from 'react'
import { Input } from '@mui/material';


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
                <Input
                    type="text"
                    onChange={this.handleChange}
                    >
                </Input>
                    
                <h2>{this.state.message} {this.state.sisu}</h2>
            </div>
        )
    }
}

export default Mui