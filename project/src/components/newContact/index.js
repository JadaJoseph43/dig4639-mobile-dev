import React, { Component } from 'react';
import './index.css';

class Add extends Component {

  constructor(props) {
    super(props);

    this.state = {added: {}};

  }

  componentDidMount() {

    fetch("http://plato.mrl.ai:8080/contacts/add", {
      "method": "POST",
      "headers": {
        "api": "joseph",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": "{}",
        "number": "[]"
      })
    })
    .then(response => response.json() )
    .then((data) => this.setState({added: data.added}) )
    .catch(err => {
      console.log(err);
    });

  }

  render() {
    return (
      <div>
        <h2>Added</h2>

        <p>{this.state.added.name}</p>
        <p>{this.state.added.number}</p>

      </div>
    );
  }
}
