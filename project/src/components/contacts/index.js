import React from 'react';
import './index.css';

class Contacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

  }

  componentDidMount() {

    window.fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "joseph"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });

  }

  render() {
    return (
      <div>
       {
         this.state.contacts.map((value, index) => {
           return <h3 key={index}>Name:{value.name} Number:({value.number})</h3>;
         })
       }
      </div>
    );
  }
}

export default Contacts;
