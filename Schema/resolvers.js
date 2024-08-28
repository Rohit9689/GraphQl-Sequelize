

const Employee = require('../models/Employee') 

const resolvers = {
  Query: {
    employees: async() => await Employee.findAll(),
    employee: (_, { email }) => Employee.findOne({where : {email}}),
  },
  Mutation: {
    addEmployee: async (_, args) => {
      const newEmployee = await Employee.create(args);
      return newEmployee;
    },
    updateEmployee: async (_, args) => {
      const [upadated] = await Employee.update(args,{where:{email : args.email}});
      if (upadated) {
        const updatedEmployee = await Employee.findOne({where:{email :args.email}});
        return updatedEmployee
      }
      throw new Error('employee not found')
   
    },
    deleteEmployee: async (_, { email }) => {
        const deleted = await Employee.destroy({ where: { email } });
        if (deleted) {
          return `Employee with email ${email} was deleted`;
        }
        throw new Error('Employee not found');
      },
  },
};

module.exports = resolvers;

