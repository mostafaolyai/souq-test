module.exports=(sequelize,Sequelize)=>{
    const Category = sequelize.define('category',{
        key:{
            type: Sequelize.STRING,
            allowNull:false// allowNull defaults to true
        },
        rootKey:{
            type: Sequelize.STRING,
            allowNull:false// allowNull defaults to true
        },
        name:{
            type: Sequelize.STRING,
            allowNull:false// allowNull defaults to true
        },
    });

    return Category;
};