import { Provider } from "@angular/core";
import { InMemoryCache } from "@apollo/client/core";
import { APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";

export const apolloProvide: Provider = {
  provide: APOLLO_OPTIONS,
  useFactory: (httpLink: HttpLink) => ({
    cache: new InMemoryCache({
      addTypename: false
    }),
    link: httpLink.create({
      uri: 'http://localhost:4000/graphql'
    })
  }),
  deps: [HttpLink]
}