import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.cardRef = React.createRef();
    this.nameRef = React.createRef();
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.cardRef.current.value.length < 16) {
        alert('Invalid card number');
    }
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleClick}>
          <input type="text" placeholder="VISA Number" name="card" ref={this.cardRef} />
          <input type="text" placeholder="Name" name="name" ref={this.nameRef} />
          <button>Send</button>
        </form>
      </>
    );
  }
}

export { Form };
