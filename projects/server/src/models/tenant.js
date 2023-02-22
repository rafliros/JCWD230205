module.exports = (sequelize, DataTypes) => {
  const tenant = sequelize.define('tenant', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    notifications: DataTypes.STRING,
    ktp: DataTypes.BLOB,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE

  }, {});

  tenant.associate = function(models){
    // Assocations define here
    
    tenant.hasMany(models.property, {
      foreignKey: 'tenant_id'
    })

  }

  return tenant
}