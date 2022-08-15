import React from 'react'

class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
        message: '',
        select: '',
        subscription: false,
        gender: ''
    }
  
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
  
    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert("Ism 5ta harfdan kam bo'lmasligi kerak")
        }
    }
  
    validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!re.test(this.state.email)) {
            alert("Email is not valid.")
        }
    };

    checkedHandler = (e) => {
        this.setState({[e.target.name]: e.target.checked})
    }
  
    render(){
      const {firstName, email, message, select, subscription} = this.state
      return (
        <>
            <h1>Form</h1>
            <input 
                type="text"
                placeholder="FirstName"
                name="firstName"
                value={firstName}
                onChange={this.changeHandler}
                onBlur={this.validateName}
            />

            <input 
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.changeHandler}
                onBlur={this.validateEmail}
            />

            <textarea 
                name="message"
                onChange={this.changeHandler}
                placeholder="Message"
                value={message}
            ></textarea>

            <select name="select" value={select} onChange={this.changeHandler}>
                <option disabled></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <input 
                type="checkbox"
                name="subscription"
                checked={subscription}
                onChange={this.checkedHandler}
            />

            <input type="radio" name='gender' value="male" onChange={this.changeHandler} /> Male
            <input type="radio" name='gender' value="female" onChange={this.changeHandler}/> Female
        </>
        
      );
    }
}

export {Form}