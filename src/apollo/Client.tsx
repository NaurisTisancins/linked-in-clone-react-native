// Container component
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://vadoligure.stepzen.net/api/angry-wombat/__graphql',
  headers: {
    Authorization:
      'apikey vadoligure::stepzen.io+1000::25d1206654e2d3571b0341729339f0bd9b3b3af79c656b22c5ff142d46d91276',
  },
  cache: new InMemoryCache(),
});

export default client;
