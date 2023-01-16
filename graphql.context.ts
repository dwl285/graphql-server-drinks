import { Db } from "./db";

export type GraphqlContext = {
  db: Db
}

export type Resolvers = {
  [key: string]: {
    [key: string]: Resolver<GraphqlContext>
  }
}

export type Resolver<TContext> =
  | ((_: any, __: any, context: TContext, info: any) => any)
  | { subscribe: any }
  | { resolve: any }
