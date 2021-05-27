const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host : dbConfig.HOST,
    dialect : dbConfig.dialect,
    operatorsAliases: false,
    logging:false,
    pool:{
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

//connection test
// sequelize.authenticate()
// .then(() => {
// console.log('Connection has been established successfully.');
// })
// .catch(err => {
// console.error('Unable to connect to the database:', err);
// });

const db= {};

db.Sequelize = Sequelize;
db.sequelize=sequelize;

db.coupon= require('./coupon.model.js')(sequelize,Sequelize);
db.category = require('./category.model.js')(sequelize,Sequelize);
db.product = require('./product.model.js')(sequelize,Sequelize);
//relation / association
//one to many
db.category.hasMany(db.product);
db.product.belongsTo(db.category);
//-------
db.category.hasMany(db.coupon);
db.coupon.belongsTo(db.category);
//---------
db.product.hasMany(db.coupon);
db.coupon.belongsTo(db.product);

//initialize db
(async ()=>{
       var productsCount= await db.product.count();
       if(productsCount===0){
           require('../config/init')(db);
        }
   })();

module.exports = db;