import React from 'react';
import './App.css';
import { Card } from './components/Card';

// class App extends React.Component {
//   state = {
//     firstName: '',
//     email: ''
//   }

//   changeHandler = (e) => {
//     this.setState({[e.target.name]: e.target.value})
//   }
//   render(){
//     const {firstName, email} = this.state
//     return (
//       <>
//         <h1>Form</h1>
//         <input 
//           type="text"
//           placeholder="FirstName"
//           name="firstName"
//           value={firstName}
//           onChange={this.changeHandler}
//         />
//         <input 
//           type="text"
//           placeholder="Email"
//           name="email"
//           value={email}
//           onChange={this.changeHandler}
//         />
//       </>
      
//     );
//   }
// }

function App() {
  return (
    <>
      <Card />
    </>
  )
}

export default App;
