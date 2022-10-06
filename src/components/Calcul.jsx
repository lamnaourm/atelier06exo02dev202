import React, { Component } from 'react';

class Calcul extends Component {
    constructor(props){
        super(props)

        this.state = {
           distance: 0,
           poids: 0,
           mode: 'normal',
           cout:0
        }
    }

    handleOnChange = (evt) => {
        this.setState({[evt.target.name] : evt.target.value});
    }

    handleOnSubmit = (evt) => {
        evt.preventDefault();
        let c = 0;
        
        if(this.state.poids<=10)
            c = this.state.distance * 0.5;
        else 
            c = this.state.distance * (this.state.poids/10) * 0.3;

        if(this.state.mode === 'express')
            c += c * 0.2
        
        this.setState({cout: c})

    }
    
    render() {
        return (
            <div className='calcul'>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>Distance : </label>
                        <input type='number' name='distance' value={this.state.distance} onChange={this.handleOnChange}/>
                    </div>
                    <div>
                        <label>Poids : </label>
                        <input type='number' name='poids' value={this.state.poids} onChange={this.handleOnChange}/>
                    </div>
                    <div>
                        <label>Mode de transport :</label>
                        <input type='radio' name='mode' value='express' checked={this.state.mode==='express'} onChange={this.handleOnChange}/> Express 
                        <input type='radio' name='mode' value='normal' checked={this.state.mode==='normal'} onChange={this.handleOnChange}/> Normal
                    </div>
                    <hr/>
                    <input type='submit' value='Calculer'/>
                    <div>
                        <label>Cout total :</label>
                        <input type='number' name='cout' value={this.state.cout} disabled/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Calcul;
