import resolvers from '../resolvers'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import data from './data';

const cache = new InMemoryCache({
  // freezeResults: true
})

const link = new HttpLink({
  uri: 'http://localhost:4000',
})
const client = new ApolloClient({
  // assumeImmutableResults: true,
  cache,
  link,
  resolvers
})

cache.writeData({
  data
})

window.cache = client.cache.optimisticData.data

export default client