db.users.insertOne({ "name": "john", age: 21 })//insert document to the users collection


db.users.insertMany(
    [
        {"name":"philips",age:21},
        {"name":"david",age:20},
        {"name":"steve",age:22},
        {"name":"zavier",age:21}

    ]
)//insert many documents to the users collection

db.employes.insertOne({
  "name": "john smith",
  "email": "john@gmail.com",
  "salary": 1456,
  "age": 28,
  "department": "IT",
  "designation": "Software Engineer",
  "experience": 4,
  "location": "Bangalore",
  "phone": "9876543210",
  "joiningDate": new Date("2024-06-15"),
  "isPermanent": true
})//inserts document to employee collection

db.employees.insertMany([{
  name: "Joseph",
  email: "joseph@gmail.com",
  department: "ds",
  salary: 2456,
  location: ["FL", "TX"],
  date: Date()
},
{ name: "ram",
  email: "ram@gmail.com",
  department: "ml",
  salary: 3456,
  location: ["AZ", "TX"],
  date: Date()
}])//inserts  many collections to employee collection

db.employees.insertMany([{
  name: "sam",
  email: "sam@gmail.com",
  department: "HR",
  salary: 3000,
  location: ["FL", "TX","AZ"],
  date: Date()
},
{ name: "alice",
  email: "alice@gmail.com",
  department: "2000",
  salary: 2000,
  location: ["AZ", "fl"],
  date: Date()
}])//inserts Many collection to employee collection

db.employees.find().skip(1)//skips the  document1

db.employees.find({"name":"alice"})//finds the name alice detalis

 db.employees.find().limit(2)//gives the first two documents 
db.employees.find(
  { department: "HR" },
  { name: 1 }
)

db.employees.find().sort({name:1})
//sorted order ascending order

db.employees.find().sort({name:-1})
//descending order

db.employees.find({},{_id:0,name:1}).sort({name:1}).limit(3).skip(1)
//skips the document1 and gives the names of employees document2 to limit 3

db.employees.find({ salary: { $gt: 3000 } })//gives greater than 3000 salary employees

db.employees.find({ salary: { $lt: 5000 } })//gives lessthan 5000 salary  employees

//in department hr gives the salary lessthan 5000 employess
db.employees.find({department:"HR", salary: { $lt: 5000 } })

//gives the details of employee whose department equal to hr
 db.employees.find({department:{$eq:"HR"}})
 
 //gives the details of employee whose not belong to  the ht dept
 db.employees.find({department:{$ne:"HR"}})