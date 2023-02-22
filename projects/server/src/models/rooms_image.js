module.exports = (sequelize, DataTypes) => {
  const rooms_image = sequelize.define('rooms_image', {
    image: DataTypes.BLOB,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE

  }, );

  rooms_image.associate = function(models){
    // Assocations define here
    
    rooms_image.belongsTo(models.rooms, {
      foreignKey: 'rooms_id'
    })
  
    
  }

  return rooms_image
}