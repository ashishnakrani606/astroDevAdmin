// import mongoose, {  models  } from "mongoose";
// const categorySchema = new mongoose.Schema({
//     categorydata: {
//         type: String,
//         required: true
//     },      
// },
//     {
//         timestamps: true
//     })

// const Category = models.Category || mongoose.model("Category", categorySchema);

// export default Category;


import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categorydata: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

// Check if the model already exists in the models object
const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
