
const studentModel = require("../models/studentModel")

exports.createStudent = async (req, res)=>{
    try {
        const profile = {firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password
    }
    const checkStudent = await studentModel.findOne({email:req.body.email})
if(checkStudent){
    return res.status(400).json({
        message: `student with the email ${req.body.email} already exists`
    })
};
       const checkPhoneNumber = await studentModel.findOne({phoneNumber:req.body.phoneNumber})
if(checkPhoneNumber){
    return res.status(400).json({
        message: `student with the email ${req.body.phoneNumber} already exists`
    })
}
    // const checkEmail = ""
    // const checkPhoneNumber = ""
 const data  = await studentModel.create(profile)
   res.status(201).json({
    message:"Students successfully created",
    data
   })
}
catch(error){
    res.status(500).json({
        message:"something went wrong",
        realError:error.message
})
}}