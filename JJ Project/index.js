const{ApolloServer}=require("apollo-server-express");
const express=require("express")
const{typeDefs}=require('./Schema/TypeDefs');
const{resolvers}=require('./Schema/Resolvers');

const server=new ApolloServer({typeDefs,resolvers});

const app=express();
server.start().then(res=>{
    server.applyMiddleware({app});
    app.listen({port:4000},()=>
    console.log('Browse to http://localhost:4000'+server.graphqlPath))
})



