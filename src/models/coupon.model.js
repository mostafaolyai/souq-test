module.exports=(sequelize,Sequelize)=>{
    const Coupon = sequelize.define('coupon',{
        code:{
            type: Sequelize.STRING,
            allowNull:false// allowNull defaults to true
        },
        percent:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        expire:{
            type:Sequelize.DATE,
            allowNull:false
        }
    });
    return Coupon;
};