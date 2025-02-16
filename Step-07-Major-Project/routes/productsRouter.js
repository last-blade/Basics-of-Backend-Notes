const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.post("/create", upload.single("productImage"), async function(request, response){
    // response.send(request.file);

    try{
        let {productName, productPrice, productDiscount, productBgColor, productPanelColor, productTextColor} = request.body;

        let product = await productModel.create(
            {
                productImage: request.file.buffer,
                productName,
                productPrice,
                productDiscount,
                productBgColor,
                productPanelColor,
                productTextColor
            }
        );
        request.flash("success", "Product created successfully!");
        response.redirect("/owners/admin");
        // response.send(product);
    }

    catch(err){
        response.send(err.message);
    }
});

module.exports = router; 