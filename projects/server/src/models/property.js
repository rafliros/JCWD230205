module.exports = (sequelize, DataTypes) => {
  const property = sequelize.define('property', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    location: DataTypes.STRING,
    comment: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    photo: DataTypes.BLOB,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE  

  }, {});

  property.associate = function(models){
    // Assocations define here

    property.hasMany(models.rooms, {
      foreignKey: 'property_id'
    })

    property.belongsTo(models.tenant, {
      foreignKey: 'tenant_id'
    })

    property.belongsTo(models.transaction, {
      foreignKey: 'transaction_id'
    })
    
  }

  return property
}