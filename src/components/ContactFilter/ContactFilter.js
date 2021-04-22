import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const onChange = useCallback(
    e => {
      dispatch(contactsActions.changeFilter(e.target.value));
    },
    [dispatch],
  );
  return (
    <input
      className={styles.input}
      type="text"
      name="filter"
      value={filter}
      // onChange={({ target }) => onChange(target.value)}
      onChange={onChange}
      placeholder="Search contact"
    />
  );
}

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
// const mapStateToProps = state => ({
//   filter: contactsSelectors.getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
