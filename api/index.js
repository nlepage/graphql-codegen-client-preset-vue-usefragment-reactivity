import { createServer } from 'node:http'
import { createSchema, createYoga } from 'graphql-yoga'

const counters = new Map()
 
export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      counter(id: ID!): Counter!
    }

    type Mutation {
      incrementCounter(id: ID!): Counter!
    }

    type Counter {
      id: ID!
      count: Int!
    }
  `,
  resolvers: {
    Query: {
      counter(_, { id }) {
        return counters.get(id) ?? { id, count: 0 }
      },
    },
    Mutation: {
      incrementCounter(_, { id }) {
        let counter
        if (counters.has(id)) {
          counter = counters.get(id)
        } else {
          counter = { id, count: 0 }
          counters.set(id, counter)
        }
        counter.count++
        return counter
      },
    },
  }
})

const yoga = createYoga({ schema })

const server = createServer(yoga)

server.listen(3000)
