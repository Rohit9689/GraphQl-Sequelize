const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const ConnectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
};

const syncDB = async () => {
    await sequelize.sync({ force: false }); 
  };
  
 
  

module.exports = {sequelize , ConnectDatabase ,syncDB}
