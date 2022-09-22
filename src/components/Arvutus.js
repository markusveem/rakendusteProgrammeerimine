import React, {Component} from 'react'


class Arvutus extends Component{
    
    constructor(){
        super()
        this.state = {
            message: 'number',
            number: 0
        }
    }

    calculate(current, nr){
        this.setState({
            number: current + nr  
        })
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.message} {this.state.number}</h1>
                <button onClick={() => this.calculate(this.state.number, 1)}>+1</button>
                <button onClick={() => this.calculate(this.state.number, -1)}>-1</button>
                <button onClick={() => this.calculate(this.state.number, 100)}>+100</button>
                <button onClick={() => this.calculate(this.state.number, -100)}>-100</button>     
            </div>
        )
    }
}

export default Arvutus