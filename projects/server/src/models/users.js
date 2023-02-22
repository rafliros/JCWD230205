const transaction = require("./transaction");

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },

    name: DataTypes.STRING,

    email: {
      type: DataTypes.STRING,
      validate: { isEmail: {msg: 'Email Not Valid'} }
      },
      
    password: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    gender: DataTypes.STRING,
    profilepicture: DataTypes.BLOB,
    birthdate: DataTypes.DATE,
    notifications: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE

  }, {});

  users.associate = function(models){
    // Assocations define here
    
    users.hasMany(models.transaction, {
      foreignKey: 'users_id'
    })
    
  }

  return users
}