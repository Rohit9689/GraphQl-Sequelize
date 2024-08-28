const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Employee {
    firstName: String
    lastName: String
    email: String
    position: String
    department: String
    DateOfJoining: String
    phoneNumber: String
    salary: Float
    managerId: String
    employmentType: String
    skills: String # Change this line to use a list of strings
  }

  type Query {
    employees: [Employee]
    employee(email: String!): Employee
  }

  type Mutation {
    addEmployee(
      firstName: String!
      lastName: String!
      email: String!
      position: String!
      department: String!
      DateOfJoining: String!
      phoneNumber: String!
      salary: Float!
      managerId: String!
      employmentType: String!
      skills: String # Allows null values for skills
    ): Employee

    updateEmployee(
      email: String!
      firstName: String
      lastName: String
      position: String
      department: String
      DateOfJoining: String
      phoneNumber: String

      salary: Float
      managerId: String
      employmentType: String
      skills: String # Allows null values for skills
    ): Employee

    deleteEmployee(email: String!): Employee
  }
`;

module.exports = typeDefs;
