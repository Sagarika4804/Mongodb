//update the statements

 //updates the salary 
db .employees .updateOne({email:"joseph@gmail.com"},{$set:{salary:1500}})
//updates the email 
db .employees .updateOne({email:"joseph@gmail.com"},{$set:{email:"abc@gmail.com"}})

//upser: true, if that document not found creates the document

db .employees .updateOne({email:"joseph@gmail.com"},{$set:{email:"abc@gmail.com"}},{upsert:true})

db.employees.updateOne({email:"john@gmail.com"},{$set:{name:"john"}},{upsert:true})

//delete 

db.employees.deleteOne({email:"abc@gmail.com"})//deletes the email abc@gmail.com document
//updateMany

db.employees.updateMany({},{$set:{points:0}})//adds new field points to all the documents


db.employees.updateMany({department:"HR"},{$set:{points:5}})//sets the points 5 to the department HR

db.employees.updateMany({},{$inc:{points:1}})//increments value 1 to all the document points 

db.employees.updateMany({},{$rename:{"points":"scores"}})

