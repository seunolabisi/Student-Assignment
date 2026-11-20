const mongoose = require("mongoose")

const courseSchema = mongoose.Schema({
    courseTitle:{type:String, required:true, unique:true},
    courseCode:{type:String, required:true, unique:true},
    description:{type:String, required:true, unique:true},
    registeredStudent:{type:mongoose.Schema.Types.ObjectId,
        ref:"studentInfo"
    }
})

const courseModel = mongoose.model("course", courseSchema)

module.exports = courseModel