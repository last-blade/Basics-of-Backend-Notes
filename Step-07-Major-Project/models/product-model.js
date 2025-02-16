const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        productImage: Buffer, 

        productName: String,

        productPrice: Number,

        productDiscount: {
            type: Number,
            default: 0
        },

        productBgColor: String,
        
        productPanelColor: String,

        productTextColor: String
    }
)

module.exports = mongoose.model("product", productSchema);