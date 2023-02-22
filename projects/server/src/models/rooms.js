module.exports = (sequelize, DataTypes) => {
  const rooms = sequelize.define('rooms', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    available: DataTypes.INTEGER,
    category: DataTypes.STRING,
    checkin: DataTypes.DATE,
    checkout: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE

  }, );

  rooms.associate = function(models){
    // Assocations define here

    rooms.hasMany(models.rooms_image, {
      foreignKey: 'rooms_id'
    })

    rooms.belongsTo(models.property, {
      foreignKey: 'property_id'
    })
    
  }

  return rooms
}