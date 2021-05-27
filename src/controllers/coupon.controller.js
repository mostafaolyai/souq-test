const db = require('../models/config.model');
const Coupon = db.coupon;
const Product = db.product;
const Category = db.category;
const Op = db.Sequelize.Op;

exports.checkOff=async (req, res) =>{
    if(!req.body.productId){
        res.status(400).send({
            message: 'productId is empty!'
        });
        return;
    }
    
    if(!req.body.price){
        res.status(400).send({
            message: 'price is empty!'
        });
        return;
    }

    if(!req.body.code){
        res.status(400).send({
            message: 'code is empty!'
        });
        return;
    }

    if(!req.body.userId){
        res.status(400).send({
            message: 'userId is empty!'
        });
        return;
    }

    const productId = Number(req.body.productId);
    const code = req.body.code.toLowerCase();
    var condition = code ? { code: { [Op.iLike]: `%${code}%` } } : null;

    const coupon = await Coupon.findOne({where : condition})
    if(!coupon){
        res.status(404).send({
            message:'Coupon Not Found!'
        });
        return;
    }
    if(coupon.expire<new Date()){
        res.status(400).send({
            message:'Coupon is Expired!'
        });
        return;
    }
    
    const myProduct = await Product.findOne({where : {id:productId}});
    if(!myProduct){
        res.status(404).send({
            message:'Product Not Found!'
        });
        return;
    }

    const myCategory = await Category.findOne({where : {id:myProduct.categoryId}});
    if(!myCategory){
        res.status(404).send({
            message:'Category Not Found!'
        });
        return;
    }

    if(!coupon.categoryId && coupon.productId!==productId){
        res.status(400).send({
            message: `Coupon isn't for ${myProduct.name}`,
            coupon
        });
        return;
    }
    else if(!coupon.productId && coupon.categoryId!==myProduct.categoryId){
        res.status(400).send({
            message:`Coupon isn't for ${myCategory.name}`,
            coupon
        });
        return;
    }

    res.status(200).send({
        message :`User ${req.body.userId} Recieved ${~~((Number(req.body.price)*coupon.percent)/100)} Off For ${myProduct.name}`,
    })
}