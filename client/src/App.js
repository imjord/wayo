import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import SignUp from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login'
import NoPage from './pages/NoPage';
import CartDetail from './pages/CartDetail';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Products from './pages/Products';
import ItemPage from './pages/ItemPage';

import { StoreProvider } from './utils/GlobalState';



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
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={CartDetail} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ItemPage} />
            <Route component={NoPage} />
          </Switch>
          <Footer />
        </StoreProvider>
      </div>
      </Router>
    </ApolloProvider>
   
  );
}

export default App;
