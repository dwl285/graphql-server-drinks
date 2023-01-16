var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var import_express = __toModule(require("express"));
var import_apollo_server_core = __toModule(require("apollo-server-core"));
var import_apollo_server_express = __toModule(require("apollo-server-express"));
var import_middleware = __toModule(require("graphql-voyager/middleware"));
var import_schema = __toModule(require("./schema"));
var import_db = __toModule(require("./db"));
async function run() {
  const app = (0, import_express.default)();
  const server = new import_apollo_server_express.ApolloServer({
    typeDefs: import_schema.typeDefs,
    resolvers: import_schema.resolvers,
    context: {
      db: import_db.db
    },
    plugins: [
      import_apollo_server_core.ApolloServerPluginLandingPageGraphQLPlayground
    ]
  });
  await server.start();
  app.use("/voyager", (0, import_middleware.express)({ endpointUrl: "/" }));
  server.applyMiddleware({ app, path: "/" });
  app.listen(3e3, () => {
    console.log("http server started");
  });
}
run();
//# sourceMappingURL=server.js.map
