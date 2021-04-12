import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { context } from './context'
import newrelicPlugin from '@newrelic/apollo-server-plugin'

const server = new ApolloServer({
  schema: schema,
  context: context,
  plugins: [newrelicPlugin],
})

server.listen({ port: process.env.PORT || 4000 }).then(async ({ url }) => {
  console.log(`\
🚀 Server ready at: ${url}
⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
  `)
})
