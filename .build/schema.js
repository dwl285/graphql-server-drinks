var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  resolvers: () => resolvers,
  typeDefs: () => typeDefs
});
var import_apollo_server_express = __toModule(require("apollo-server-express"));
var import_uuid = __toModule(require("uuid"));
const typeDefs = import_apollo_server_express.gql`
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
`;
const resolvers = {
  Query: {
    drinkRecords: (_, __, { db }) => db.drinkRecords
  },
  Mutation: {
    addDrinkRecord: (_, { drinks, name }, { db }) => {
      const newRecord = {
        id: (0, import_uuid.v4)(),
        drinks,
        name,
        createdAt: Date.now().toString()
      };
      db.drinkRecords.push(newRecord);
      return newRecord;
    },
    deleteDrinkRecord: (_, { id }, { db }) => {
      const deletedDrinkRecord = db.drinkRecords.filter((r) => r.id == id)[0];
      const newDrinkRecords = db.drinkRecords.filter((r) => r.id != id);
      db.drinkRecords = newDrinkRecords;
      return deletedDrinkRecord;
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  resolvers,
  typeDefs
});
//# sourceMappingURL=schema.js.map
