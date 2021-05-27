
module.exports=(sequelize,Sequelize)=>{
    const Product = sequelize.define('product',{
        name:{
            type: Sequelize.STRING,
            allowNull:false// allowNull defaults to true
        },
        price:{
            type:Sequelize.BIGINT,
            allowNull:false
        }
    });
    return Product;
};