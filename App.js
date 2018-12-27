import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Formulario from './Formulario';
import Error from './Error';
import Clima from './Clima'

class App extends Component {

       state = {
           error: "",
           consulta : {},
           resultado : {}
        }
          componentDidUpdate(prevProps,prevState){
            if(prevState.consulta != this.state.consulta ){
            this.consultarApi()
              }
            }


        componentDidMount(){
        this.setState({
        error : false
        })
      }



      consultarApi = ()=>{
      const {ciudades,paises} = this.state.consulta

      const appid = "0356a93256bebb0bd5372d64b92087f7"
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudades},${paises}&appid=${appid}`

      //console.log(url)

          fetch(url)
            .then(res=>{
            // console.log(res)
            return res.json()
               })
            .then(data =>{
            //console.log(data)
            this.setState({
            resultado:data
            })
          })
            .catch(error=>{
            console.log(error)
             })
            }

        mostrar = (datos) =>{
          if(datos.ciudades === "" || datos.paises === ""){
          this.setState({
          error : true
          })
        }
          else{
            this.setState({
            consulta : datos,
            error :false
             })
            }
          }

      render() {

        const error = this.state.error
        let {cod} = this.state.resultado
        let r;

        if(error === true){
        r = <Error
      
        error = "Tienes que completar los dos campos"
      
        />
        }
       else if(cod === "404"){
          r =  <Error
       
          error = "No se ha podido encontrar la ciudad"
       />
    }
      else{
        r = <Clima resultado = {this.state.resultado}/>  
     }

      return (
      <div>
        <Formulario
      
          info = {this.mostrar}
      
       />
       {r}
        </div>
    );
  }
}

export default App;

