module.exports=async (db)=>{

        var mainCate = await db.category.create({
            key:'1v',
            rootKey:'1v',
            name:'cate'
        });
        db.product.create({
            name:"p1",
            price:"10000",
            categoryId:mainCate.id
        });
        db.coupon.create({
            code:"souq1",
            percent:"10",
            expire:new Date(2021,09,12),
            categoryId:mainCate.id
        });
        
        
        var subCate = await db.category.create({
            key:'2v',
            rootKey:'1v2v',
            name:'subcate'
        });
        db.product.create({
            name:"p2",
            price:"20000",
            categoryId:subCate.id
        });
        db.coupon.create({
            code:"souq2",
            percent:"20",
            expire:new Date(2021,09,29),
            categoryId:subCate.id
        });

        
       const pro=await db.product.create({
            name:"p3",
            price:"30000",
            categoryId:subCate.id
        });
        db.coupon.create({
            code:"souq3",
            percent:"30",
            expire:new Date(2021,10,29),
            productId:pro.id
        });
    
};