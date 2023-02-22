const { sequelize } = require("./models");

sequelize
    .authenticate()
    .then(()=>{
        return sequelize.sync({alter:true})
    })
    .then(()=>{
        console.log("database synced")
    }).catch((error)=>{
        console.log(error)
    })