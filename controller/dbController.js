const db=require("../database")

//get all employee from db
const getAllUsers=()=>{
    return db.execute(`select * from employees`)
}

//inserts employee details into db
const insertIntoDb=(name,address,contact,email)=>{
    return db.execute(`insert into employees (name,address,contact,email) values (?,?,?,?)`,[name,address,contact,email])
}

//update userDetails in db
const updateUserIntoDb=(id,name,address,contact,email)=>{
return db.execute(`update employees set name=?,address=?,contact=?,email=? where id=?`,[name,address,contact,email,id])
}

//delete user from db
const deleteUserFromDb=(id)=>{
return db.execute(`delete from employees where id=?`,[id])
} 

//get user by id
const getUserById=(id)=>{
    return db.execute(`select * from employees where id=?`,[id])
}

//search user
const filterUserFromDb=(user)=>{
    return db.execute(`select * from employees where name like ?`,[`%${user}%`])
}


module.exports={
    getAllUsers,
    insertIntoDb,
    updateUserIntoDb,
    deleteUserFromDb,
    getUserById,
    filterUserFromDb
}