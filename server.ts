import express from 'express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import { express as expressVoyager } from 'graphql-voyager/middleware'
import { typeDefs, resolvers } from './schema'
import { db } from './db'

async function run() {
  const app = express()

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      db,
    },
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  })

  await server.start()

  app.use('/voyager', expressVoyager({ endpointUrl: '/' }))

  server.applyMiddleware({ app, path: '/' })

  app.listen(3000, () => {
    console.log('http server started')
  })
}

run()
