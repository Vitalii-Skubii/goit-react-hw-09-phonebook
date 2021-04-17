// import actionTypes from './contacts-types';
import { createAction } from '@reduxjs/toolkit';

// const contactsAdd = createAction('contacts/add', (name, number) => ({
//   payload: { id: uuid(), name, number },
// }));
// const contactsAdd = (name, number) => ({
//   type: actionTypes.CONTACTS_ADD,
//   payload: { id: uuid(), name, number },
// });
export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');
export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');
export const contactRemoveRequest = createAction(
  'contacts/contactRemoveRequest',
);
export const contactRemoveSuccess = createAction(
  'contacts/contactRemoveSuccess',
);
export const contactRemoveError = createAction('contacts/contactRemoveError');
// export const contactRemove = createAction('contacts/remove');
// const contactRemove = id => ({
//   type: actionTypes.CONTACTS_REMOVE,
//   payload: id,
// });
export const changeFilter = createAction('contacts/filter');
// const changeFilter = value => ({
//   type: actionTypes.CONTACTS_FILTER,
//   payload: value,
// });
// export default {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   contactRemove,
//   changeFilter,
// };
