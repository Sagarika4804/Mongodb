db.users.drop()//drops the collection users

db.dropDatabase()//drops the database

db.employees.aggregate([{ $match: { department: "HR" } }])//shows only hr employees

db.employees.aggregate([{ $match: { department: "HR" } },{$project:{name:1}}])//shows the names of employees whose belong to hr dept

db.employees.aggregate([{ $match: { department: "HR" } },{$project:{name:1,email:1}}])//shows the name email of the emp whose belonging to hr dept

db.employees.aggregate([{ $group: {_id: "$department",total: { $sum: "$salary" } }}])//aggregates the salary group by dept




