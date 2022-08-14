import React from 'react';
import './App.css';
<<<<<<< HEAD
import { Form } from './components/Form';

class App extends React.Component {
  render() {
    return (
      <>
        <Form />
      </>
    )
  }
=======
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
>>>>>>> 8bec73ae17bd4033ac75c7dddbe1e68aec8adc55
}

export default App;