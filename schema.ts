import { gql } from 'apollo-server-express'
import { Resolvers } from './graphql.context'
import { DrinkRecord } from './db'
import { v4 as uuidv4 } from 'uuid';

export const typeDefs = gql`
  type Query {
    drinkRecords: [DrinkRecord!]!
  }

  type Mutation {
    addDrinkRecord(
      drinks: Drinks!
      name: Name!
    ): DrinkRecord!

    deleteDrinkRecord(
      id: ID!
    ): DrinkRecord!

  }

  type DrinkRecord {
    id: ID!
    drinks: Drinks!
    name: Name!
    createdAt: String!
  }

  enum Drinks {
    ONE,
    ONE_POINT_FIVE
    TWO,
    TWO_POINT_FIVE,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    TWELVE,
    FOURTEEN,
    SIXTEEN,
    EIGHTEEN,
    TWENTY_PLUS
  }

  enum Name {
    DAN,
    JAMIE,
    DAVE,
    RICHARD,
    LIAM,
    ADAM,
    ED,
    JAMES
  }
`

export const resolvers: Resolvers = {
  Query: {
    drinkRecords: (_, __, { db }) => db.drinkRecords
  },

  Mutation: {
    addDrinkRecord: (_, { drinks, name }, { db }) => {
      const newRecord: DrinkRecord = {
        id: uuidv4(),
        drinks,
        name,
        createdAt: Date.now().toString(),
      }

      db.drinkRecords.push(newRecord);

      return newRecord
    },

    deleteDrinkRecord: (_, { id }, { db }) => {
      // find the record to delete
      const deletedDrinkRecord = db.drinkRecords.filter(r => r.id == id)[0]
      // create a new array without the record to delete
      const newDrinkRecords = db.drinkRecords.filter(r => r.id != id)
      // overwrite the existing array with the record to delete removed
      db.drinkRecords = newDrinkRecords;
      // return the deleted record
      return deletedDrinkRecord
    },
  }
}