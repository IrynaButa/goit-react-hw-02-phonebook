import React, { Component } from "react";
import shortid from "shortid";

// import Container from './components/Container';
// import TodoList from './components/TodoList';
import Contacts from "./Components/Contacts";
import Filter from "./Components/Filter";
import Form from "./Components/Form";
// import initialTodos from './todos.json';

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(`${name} already exist`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((state) => ({
      contacts: [contact, ...state.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  onChangeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  //  changeFilter = (filter) => {
  //     this.setState({ filter });
  //   };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    // const { todos, filter } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();
    // const visibleTodos = this.getVisibleTodos();

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChangeFilter={this.onChangeFilter}
        />
        <Contacts
          contacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
