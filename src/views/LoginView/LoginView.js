import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Container, Input } from '@material-ui/core';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState('');
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        style={{
          padding: 50,
          display: 'flex',
          textAlign: 'center',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Input
            style={{ marginBottom: '20px' }}
            fullWidth="true"
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />

          <Input
            // className={styles.input}
            style={{ marginBottom: '20px' }}
            fullWidth="true"
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            // className={styles.btn}
            type="submit"
          >
            LogIn
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

// import { connect } from 'react-redux';
// import React, { Component } from 'react';
// import { authOperations } from '../../redux/auth';

// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };
//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onLogin(this.state);
//     this.resetForm();
//   };
//   resetForm = () => {
//     this.setState({
//       email: '',
//       password: '',
//     });
//   };

//   render() {
//     const { email, password } = this.state;
// return (
//   <Container maxWidth="sm">
//     <Paper
//       elevation={3}
//       style={{
//         padding: 50,
//         display: 'flex',
//         textAlign: 'center',
//       }}
//     >
//       <form
//         // className={styles.form}
//         onSubmit={this.handleSubmit}
//       >
//         <Input
//           // className={styles.input}
//           style={{ marginBottom: '20px' }}
//           fullWidth="true"
//           type="email"
//           name="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={this.handleChange}
//         />

//         <Input
//           // className={styles.input}
//           style={{ marginBottom: '20px' }}
//           fullWidth="true"
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={this.handleChange}
//         />
//         <Button
//           // className={styles.btn}
//           type="submit"
//         >
//           LogIn
//         </Button>
//       </form>
//     </Paper>
//   </Container>
// );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };
// // const mapDispatchToProps = dispatch => ({
// //   onRegister: data => dispatch(authOperations.register(data)),
// // });

// export default connect(null, mapDispatchToProps)(LoginView);
