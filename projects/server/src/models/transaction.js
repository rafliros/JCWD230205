module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transaction', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    total_price: DataTypes.INTEGER,
    total_room: DataTypes.INTEGER,
    date: DataTypes.DATE,
    cardname: DataTypes.STRING,
    cardnumber: DataTypes.INTEGER,
    expirydate: DataTypes.DATE,
    cvv: DataTypes.STRING,
    invoice: DataTypes.BLOB

  }, {});

  transaction.associate = function(models){
    // Assocations define here
    
    transaction.hasMany(models.property, {
      foreignKey: 'transaction_id'
    })

    transaction.belongsTo(models.users, {
      foreignKey: 'users_id'
    })
    
  }

  return transaction
}