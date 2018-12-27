import React, { Component } from 'react';
import estilos from '../css/estilos.css';



    class Clima extends Component{


        mostrarResultado = ()=>{
            const {name,weather,main} = this.props.resultado

            if(!name || !weather || !main)return null

            let kelvin = 273.15

            return(
                <div className = "contenido">
                    
              <h1>Nombre : {name}</h1>
                    
              <h1>Actual : {(main.temp - kelvin).toFixed(2)}</h1>
                    
              <h1>Maxima : {(main.temp_max - kelvin).toFixed(2)}</h1>

              <h1>Minima : {(main.temp_min - kelvin).toFixed(2)}</h1>

              <h1>Humedad : {main.humidity}%</h1>      
                </div>
            )

        }


        render(){
            return(
                <div>
                <p>{this.mostrarResultado()}</p>
                </div>
            )
        }
    }

    export default Clima
