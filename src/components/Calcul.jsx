import React, { Component } from 'react';

class Calcul extends Component {
    constructor(props){
        super(props)

        this.state = {
          
        }
    }

    handleOnChange = (evt) => {
    }

    handleOnSubmit = (evt) => {
        

    }
    
    render() {
        return (
            <div className='calcul'>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>Distance : </label>
                        <input type='number' name='distance' />
                    </div>
                    <div>
                        <label>Poids : </label>
                        <input type='number' name='poids' />
                    </div>
                    <div>
                        <label>Mode de transport :</label>
                        <input type='radio' name='mode' value='express' /> Express 
                        <input type='radio' name='mode' value='normal' /> Normal
                    </div>
                    <hr/>
                    <input type='submit' value='Calculer'/>
                    <div>
                        <label>Cout total :</label>
                        <input type='number' name='cout' disabled/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Calcul;
