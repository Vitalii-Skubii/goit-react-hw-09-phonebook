import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import ContactFilter from '../../components/ContactFilter';
import styles from './ContactsView.module.css';
import { connect } from 'react-redux';
// import contactsOperations from '../redux/contacts/contacts-operations';
// import contactsSelectors from '../redux/contacts/contacts-selectors';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
// function App({ items, filter, onAdd, onRemove }) {
class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Phonebook</h2>
        <ContactForm
        // onAdd={this.contactsAddHandler}
        // uniqueCheck={this.checkContactUnique}
        />
        <h2 className={styles.title}>Contact List</h2>
        <ContactFilter />
        {this.props.isLoadingContacts && <h1>Loading... </h1>}
        <ContactList
        // contacts={visibleContact}
        // onRemove={this.handleRemoveContact}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
