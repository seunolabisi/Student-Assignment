const mongoose = require("mongoose")

const scoreSchema = mongoose.Schema({
    student:{type:mongoose.Schema.Types.ObjectId,
        ref:"studentInfo"
    },
    course:{type:mongoose.Schema.Types.ObjectId,
        ref:"course"
    },
    caScore:{type:Number, required:true,min:0, max:30},
    examinationScore:{type:Number, required:true, min:0, max70},
    totalScore:{type:Number, default:0}
    
})

scoreSchema.pre("save",function(next){
    this.totalScore = this.caScore+this.examinationScore
})

const scoreModel = mongoose.model("score", scoreSchema)
module.exports = scoreModel