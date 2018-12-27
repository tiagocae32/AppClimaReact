import React, { Component } from 'react';
import estilos from '../css/estilos.css';



    class Error extends Component{
        render(){
            return(
                <div>
                <h1 className = "error">{this.props.error}</h1>
                </div>
            )
        }
    }

    export default Error
