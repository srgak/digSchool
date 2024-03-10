import { Provider } from '@angular/core';
import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';
import { environments } from 'apps/frontend/src/environments/environments';

export const apolloProvide: Provider = {
  provide: APOLLO_OPTIONS,
  useFactory: (httpLink: HttpLink) => ({
    cache: new InMemoryCache({
      addTypename: false,
    }),
    link: ApolloLink.from([
      setContext(() => ({
        headers: {
          'type-request': 'graphql',
        },
      })),
      httpLink.create({
        uri: `${environments.apiUrl}graphql`,
      }),
    ]),
  }),
  deps: [HttpLink],
};
