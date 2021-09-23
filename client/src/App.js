import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import SignUp from './pages/Signup';

function App() {
const httpLink = createHttpLink({
  uri: '/graphql',
})
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})



  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
        <SignUp> </SignUp>
      <Switch>
        
          </Switch>
      </div>
      </Router>
    </ApolloProvider>
   
  );
}

export default App;
