const graphql = require('graphql');
const _ = require('lodash');
const {
 GraphQLObjectType,
 GraphQLString,
 GraphQLInt,
 GraphQLSchema
} = graphql;

const users = [
    {
        id: '1', firstName: 'sowmi', age: 24,
        id: '2', firstName: 'gowtham', age: 23
    }
];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString } ,
        firstName: {type: GraphQLString },
        age: {type: GraphQLInt}
    }
});

const RootQuery = new GraphQLObjectType ({
    name: 'RootQueryType',
    fields: {
    user: {
        type: UserType,
        args: {id: {type: GraphQLString}},
        resolve(parentVale, args) {
            return _.find(users, {id: args.id});

        }
    }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});