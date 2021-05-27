module.exports = app=>{
    const coupon = require('../controllers/coupon.controller.js');

    const router = require('express').Router();

    router.get('/', coupon.checkOff);

    app.use('/api/coupon', router);
}