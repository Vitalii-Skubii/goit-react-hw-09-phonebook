import { Component, useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const updateName = useCallback(e => {
    setName(e.target.value);
  }, []);
  const updateNumber = useCallback(e => {
    setNumber(e.target.value);
  }, []);
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const validateForm = () => {
        if (!name || !number) {
          alert('Fill in all fields');
          return false;
        }
        const isUnique = contacts.find(contact => contact.name === name);
        isUnique && alert('Contact is alredy in cotactList');
        return !isUnique;
      };
      if (!validateForm) return;
      validateForm();
      dispatch(contactsOperations.contactsAdd(name, number));
      setName('');
      setNumber('');
    },
    [contacts, dispatch, name, number],
  );
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={updateName}
      />
      <input
        className={styles.input}
        type="tel"
        name="number"
        placeholder="Enter phone number"
        value={number}
        onChange={updateNumber}
      />
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// const initionalState = {
//   name: '',
//   number: '',
// };

// class ContactForm extends Component {
//   state = initionalState;
//   changeFormHandler = ({ target }) => {
//     const { name, value } = target;
//     this.setState({ [name]: value });
//     console.log(this.props);
//   };

//   submitFormHandler = event => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     const { onAdd } = this.props;

//     const isValidForm = this.validateForm();
//     if (!isValidForm) return;

//     onAdd(name, number);
//     this.resetForm();
//   };

//   validateForm = () => {
//     const { name, number } = this.state;
//     const { contacts } = this.props;
//     if (!name || !number) {
//       alert('Fill in all fields');
//       return false;
//     }
//     const isUnique = contacts.find(contact => contact.name === name);
//     isUnique && alert('Contact is alredy in cotactList');
//     return !isUnique;
//   };

//   resetForm = () => this.setState(initionalState);

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={styles.form} onSubmit={this.submitFormHandler}>
//         <input
//           className={styles.input}
//           type="text"
//           name="name"
//           placeholder="Enter name"
//           value={name}
//           onChange={this.changeFormHandler}
//         />
//         <input
//           className={styles.input}
//           type="tel"
//           name="number"
//           placeholder="Enter phone number"
//           value={number}
//           onChange={this.changeFormHandler}
//         />
//         <button className={styles.btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
// const mapStateToProps = state => ({ contacts: state.contacts.items });
// const mapDispatchToProps = dispatch => ({
//   onAdd: (name, number) =>
//     dispatch(contactsOperations.contactsAdd(name, number)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
