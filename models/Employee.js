const {DataTypes} = require('sequelize')

const {sequelize} = require('../DataBase/db')

const Employee = sequelize.define('Employee',{
    firstName:{
        type : DataTypes.STRING,
        allowNull:false,
    },
    lastName:{
        type : DataTypes.STRING,
        allowNull:false,
    },
  
    email :{
        type : DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    position:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    department:{
        type:DataTypes.STRING,
        allowNull:false
    },
    DateOfJoining:{
        type:DataTypes.DATE,
        allowNull:false
    },
    phoneNumber:{
        type:DataTypes.STRING,
        allowNull:false
    },
    salary: {
        type: DataTypes.FLOAT,
      },
      managerId: {
        type: DataTypes.STRING,
      },
      employmentType: {
        type: DataTypes.STRING,
      },
      skills: {
        type: DataTypes.STRING, 
      }
    })

module.exports = Employee;