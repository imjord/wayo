import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';



function Login(propboi) {
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
        <div className='col-12 col-md-6'>
          <div className='card'>
            <h4 className='card-header'>Login</h4>
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
                <button className='btn d-block w-100' type='submit'>
                  Submit
                </button>
                <Link to="/signup">Not a member? Signup!</Link>
              </form>
              {error && <div className="nes-text is-error">Login failed</div>}
  
            </div>
          </div>
        </div>
      </main>
      )

}

export default Login;