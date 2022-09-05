const{gql}= require("apollo-server-express");
const typeDefs=gql`

type Results{
    FullPath:String
    name:String
    size:Float
    exten:String
    type:String
    created:String 
    access:String
    children:[String]
}
#rootPath
type Query{
    ListDirectory(pathString:String!):Results
}
`

module.exports={typeDefs};