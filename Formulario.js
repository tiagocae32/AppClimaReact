import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import estilos from '../css/estilos.css';



class Formulario extends Component {

    ciudad = React.createRef()
    pais = React.createRef()


    enviar = (e)=>{
        e.preventDefault()

        const datos = {
            ciudades : this.ciudad.current.value,
            paises : this.pais.current.value
        }

        //console.log(datos)

        //mandarlo por props al componente principal

        this.props.info(datos)

    }


  render() {
    return (
      
        <div>
            <h1 className = "h1">App del clima</h1>
            <form className = "form" onSubmit = {this.enviar}> 
                <div className = "div1">
                <input ref = {this.ciudad} className = "input1" type = "text" placeholder="introduzca la ciudad"/>
                </div>
                <div className = "div2">

                <input  ref = {this.pais} className = "input2" type = "text" placeholder = "ingrese el pais"/>    

                </div>
                <div className = "div3">
                <input className = "input3" type = "submit" value = "enviar"/>
                </div>
            </form>
        </div>

     
    );
  }
}

export default Formulario;