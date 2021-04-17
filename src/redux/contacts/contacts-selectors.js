import { createSelector } from '@reduxjs/toolkit';
const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.items;
// const getVisibleContacts = state => {
//   const contacts = getAllContacts(state);
//   const filter = getFilter(state);
//   return contacts.filter(({ name }) =>
//     name.toLowerCase.includes(filter.toLowerCase()),
//   );
// };
const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
export default { getLoading, getFilter, getVisibleContacts };
