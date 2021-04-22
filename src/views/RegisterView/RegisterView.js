import { useDispatch, useSelector } from 'react-redux';
// import React, { Component } from 'react';
import { authOperations } from '../../redux/auth';
import { Paper, Button, Container, Input } from '@material-ui/core';
import React, { useState } from 'react';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const handleNameChange = e => {
    setName(e.target.value);
  };
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
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
        <form
          // className={styles.form}
          onSubmit={handleSubmit}
        >
          <Input
            style={{ marginBottom: '20px' }}
            fullWidth="true"
            // className={styles.input}
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
          />
          <Input
            // className={styles.input}
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
          <Button type="submit">Register</Button>
        </form>
      </Paper>
    </Container>
  );
}

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };
//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onRegister(this.state);
//     this.resetForm();
//   };
//   resetForm = () => {
//     this.setState({
//       name: '',
//       email: '',
//       password: '',
//     });
//   };
//   render() {
//     const { name, email, password } = this.state;
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
//           style={{ marginBottom: '20px' }}
//           fullWidth="true"
//           // className={styles.input}
//           type="text"
//           name="name"
//           placeholder="Enter name"
//           value={name}
//           onChange={this.handleChange}
//         />
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
//           Register
//         </Button>
//       </form>
//     </Paper>
//   </Container>
// );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };
// // const mapDispatchToProps = dispatch => ({
// //   onRegister: data => dispatch(authOperations.register(data)),
// // });

// export default connect(null, mapDispatchToProps)(RegisterView);
