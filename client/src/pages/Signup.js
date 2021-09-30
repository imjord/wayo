import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button, makeStyles, createStyles } from '@material-ui/core';

import './AllPages.css';

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

function SignUp() {

const classes = useStyles();
const [formState, setFormState] = useState({ username: '', email: '', password: ''});

// update the state based on form input changes 
const updateChange = (event) => {
    const { name, value} = event.target;

    setFormState({
        ...formState,
        [name]: value,
    })
}

const [addUser, { error }] = useMutation(ADD_USER); 

// submit form 
const updateFormSubmit = async event => {
    event.preventDefault();

    try {
        // executre adduser mutation and pass in variable data from form 
        const { data } = await addUser({
            variables: { ...formState }
        });
        Auth.login(data.addUser.token);
    } catch (e){
        console.error(e);
    }
};
return(
    <main className='flex-row justify-center mb-4'>
      <div>
        <div className='login-card'>
          <h4 className='card-header nes-text is-primary'>Sign Up</h4>
          <div className='login-page'>
            <form onSubmit={updateFormSubmit}>
              <input
                className='form-input'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={updateChange}
              />
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
            {error && <div className="nes-text is-error">Sign up failed</div>}
          </div>
        </div>
      </div>
    </main>
)

}

export default SignUp;