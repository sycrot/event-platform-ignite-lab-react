import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o67bfx0r6e01xi3f5yceip/master',
    cache: new InMemoryCache()
})