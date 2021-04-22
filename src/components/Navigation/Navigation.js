import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getAuthentificated);
  return (
    <div>
      <NavLink className="NavLink" activeClassName="NavLinkActive" to="/" exact>
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getAuthentificated(state),
// });

// export default connect(mapStateToProps)(Navigation);
