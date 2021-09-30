import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Button, makeStyles, createStyles } from '@material-ui/core';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import './AllPages.css';
import { padding } from '@mui/system';


const useStyles = makeStyles((theme) => 
  createStyles({
    submitBtn: {
      alignContent:"center",
      justifyContent: 'center',
      width: '50%',
      marginLeft: '10%',
      marginTop: '10px',
      padding: '4'
    }

  }))

function Login(propboi) {

  const classes = useStyles();
  const [formState, setFormState] = useState({ email: '' , password: ''});

    // update state based on form input changes
  const updateChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [login, { error }] = useMutation(LOGIN_USER);
    // SUBMIT FORM 

    const updateFormSubmit = async event => {
        event.preventDefault();
      
        try {
          const { data } = await login({
            variables: { ...formState }
          });
      
          Auth.login(data.login.token);
        } catch (e) {
          console.error(e);
        }
        // clear form values
        setFormState({
          email: '',
          password: '',
        });
      };

      return(
       
        <main className='flex-row justify-center mb-4'>
        <div className='login-card'>
        <h4 className='card-header nes-text is-primary'>Login</h4>
          <div className='login-page'>
            
            <div className='card-body'>
              <form onSubmit={updateFormSubmit}>
                <input
                  className='form-input'
                  placeholder='Your email'
                  name='email'
                  type='email'
                  id='email'
                  value={formState.email}
                  onChange={updateChange}
                />
                <input
                  className='form-input'
                  placeholder='******'
                  name='password'
                  type='password'
                  id='password'
                  value={formState.password}
                  onChange={updateChange}
                />

                  <Button 
                    type='submit'
                    variant="outlined"
                    className={classes.submitBtn}
                  >
                    Enter
                  </Button>
              </form>
              <Link to="/signup" className="signUpLink">Not a member? Signup!</Link>
              {error && <div className="nes-text is-error">Login failed</div>}
  
            </div>
          </div>
        </div>
      </main>
      )

}

export default Login;