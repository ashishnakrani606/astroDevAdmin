import mongoose, {  models  } from "mongoose";
const categorySchema = new mongoose.Schema({
        categorydata: {
        type: String,
        required: true
    }, 
},
    {
        timestamps: true
    })

const Category = models.categories || mongoose.model("categories", categorySchema);

export default Category;
