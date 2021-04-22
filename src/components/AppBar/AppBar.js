import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserInfo from '../UserInfo';
import { authSelectors } from '../../redux/auth';
import { Toolbar } from '@material-ui/core';
export default function AppBar() {
  const isAuthentificated = useSelector(authSelectors.getAuthentificated);
  return (
    <Toolbar
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#5050b0',
        paddingLeft: 50,
        paddingRight: 50,
        marginBottom: 20,
      }}
    >
      <Navigation />
      {isAuthentificated ? <UserInfo /> : <AuthNav />}
    </Toolbar>
  );
}

// const mapStateToProps = state => ({
//   isAuthentificated: authSelectors.getAuthentificated(state),
// });

// export default connect(mapStateToProps)(AppBar);
