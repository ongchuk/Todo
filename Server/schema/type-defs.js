const {gql} = require('apollo-server')


const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        age: Int!
        nationality: Nationality!
        username: String!
        friends: [User]
        favoriteMovies: [Movie]


    },
    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheater: Boolean!

    }
    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!

        
    }

    input CreateUserInput {
        name: String!
        age: Int!
        username: String!
        nationality: Nationality = BHUTAN

    },
    input UpdateUserNameInput{
        id: ID!
        NewUserName: String!
    }

    type Mutation {

        createUser(input: CreateUserInput!): User
        UpdateUserName(input: UpdateUserNameInput!): User
        deleteUser(id:ID!):User

    }
    enum Nationality {
        AUSTRALIA
        INDIAN
        BHUTAN
        HUNGRY
        SINGAPORE
        GERMANY
        USA

    }
`;

module.exports = {
    typeDefs
}