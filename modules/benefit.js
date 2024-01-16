import mongoose, {  models  } from "mongoose";
const benefitSchema = new mongoose.Schema({
        title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },   
},
    {
        timestamps: true
    })

const Benefit = models.Benefit || mongoose.model("Benefit", benefitSchema);

export default Benefit;