import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const apolloClient = (token: string | undefined) =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: import.meta.env.VITE_GRAPHQL_API,
      credentials: 'include',
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    }),
  });
