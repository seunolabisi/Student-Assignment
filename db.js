const mongoose = require("mongoose")

mongoose.connect("mongodb://seunolabisi131_db_user:P7oFXhRPCCFHGluq@ac-ltfpqp1-shard-00-00.fgv45de.mongodb.net:27017,ac-ltfpqp1-shard-00-01.fgv45de.mongodb.net:27017,ac-ltfpqp1-shard-00-02.fgv45de.mongodb.net:27017/?ssl=true&replicaSet=atlas-bt99rr-shard-0&authSource=admin").then(()=>{console.log("Database Connection Established")}).catch((err)=>{console.log("Unable to connect to db "+err)})
   