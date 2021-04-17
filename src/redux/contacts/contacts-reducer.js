import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actionTypes from './contacts-types';
import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  contactRemoveSuccess,
  contactRemoveRequest,
  contactRemoveError,
  fetchContactSuccess,
  fetchContactRequest,
  fetchContactError,
  changeFilter,
} from './contacts-actions';
const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [contactRemoveSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.CONTACTS_ADD:
//       return [...state, payload];

//     case actionTypes.CONTACTS_REMOVE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };
const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [contactRemoveRequest]: () => true,
  [contactRemoveSuccess]: () => false,
  [contactRemoveError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});
const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});
// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.CONTACTS_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({ items, filter, loading });

// filter: filterReducer,
// items: itemsReducer,
