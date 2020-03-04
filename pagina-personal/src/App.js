import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
 return (
   <div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         <h1>Resumen de mi vida</h1>  </p>
         
    <h2>Mi nombre es diego, tengo 23 años naci en peru en el año 1996, vine a la argentina cuando tenia 10 años tuve una infancia algo complicada, no tuve muchas cosas pero si muchos muchos amigos/as y la verdad que fue lo mejor que me pude pasar porque me hice conocido y tambien querido el dia que me tuve q ir para viajar a la argentina todo el barrio me dio cartas ya q todos eran amigos mios sabia que era un hasta pronto y no un adios ya que volveria </h2>

    <p>
       <h1>Mis pasa tiempo</h1>
    </p> 
    <h2>Me gusta mucho jugar a la pelota y tambien escuchar musica cuando estoy solo...a veces (muy raras veces) me gusta leer uno que otro libro que este relacionado con la historia.</h2>
 
 
  
  
  
  
  
  
  
  
  
  
  
  <input/>
  </header>
  </div>
 );
}
 
class NameForm extends React.Component {
 constructor(props) {
   super(props);
   this.state = {value: ''};
 
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 
 handleChange(event) {
   this.setState({value: event.target.value});
 }
 
 handleSubmit(event) {
   alert('A name was submitted: ' + this.state.value);
   event.preventDefault();
 }
 
 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <label>

         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input/>
     </form>
   );
 }
}
 
 
 
 
export default App;

