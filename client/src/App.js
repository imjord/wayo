import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';


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
      <Switch>
        
          </Switch>
      </div>
      </Router>
    </ApolloProvider>
   
  );
}

export default App;
