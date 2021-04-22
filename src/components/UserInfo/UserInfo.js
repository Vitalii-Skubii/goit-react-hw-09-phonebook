import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button, Paper, Avatar } from '@material-ui/core';
import photo from './cat.jpg';

export default function UserInfo() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = photo;
  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);
  return (
    <Paper
      elevation={0}
      style={{
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Avatar style={{ marginRight: 10 }} src={avatar} alt="" />
      <h1 style={{ marginRight: 10 }}>{name}</h1>

      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={onLogout}
      >
        LogOut
      </Button>
    </Paper>
  );
}

// const mapStateToProps = state => ({
//   name: authSelectors.getUsername(state),
//   email: authSelectors.getUseremail(state),
//   avatar: photo,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
