const { getAllUsers, insertIntoDb, getUserById, updateUserIntoDb, deleteUserFromDb, filterUserFromDb } = require("./dbController");


//get dashboard/home page
const get_Dashboard=async(req,res)=>{
    try {
        const users=await getAllUsers();
        const viewsData={
            users:users[0],
            filter:false
        }
        res.status(200).render("home",viewsData)
    } catch (error) {
        console.log(error);
    }
}

//get create page
const get_Create=(req,res)=>{
    try {
        const viewsData={
            update:false
        }
        res.status(200).render("create",viewsData)
    } catch (error) {
        console.log(error);
    }
}

//post employee to db
const post_User=async(req,res)=>{
    const {name,address,contact,email}=req.body;
    try {
        const user=await insertIntoDb(name,address,contact,email)
        if(user){
            res.status(200).redirect('/')
        }else{
            console.log("Error");
        }
        
    } catch (error) {
        console.log(error);
    }
}


//update user details
const get_Update_User=async(req,res)=>{
    const {id}=req.body;
    try {
        const userData=await getUserById(id)
        const viewsData={
            update:true,
            user:userData[0][0]
        }
        res.render("create",viewsData)
    } catch (error) {
        console.log(error);
    }
}

const update_User=async(req,res)=>{
   const {id,name,address,contact,email}=req.body;
   try {
     const user=await updateUserIntoDb(id,name,address,contact,email)
     if(user){
       return res.status(300).redirect("/")
     }
   } catch (error) {
    console.log(error);
   }
    
}

//delete user
const delete_User=async(req,res)=>{9
    const {id}=req.body;
    try {
        const user=await deleteUserFromDb(id)
        if(user){
            res.status(300).redirect("/")
        }
    } catch (error) {
        console.log(error);
    }
}

//filter user 
const filter_User=async(req,res)=>{
    const {searchData}=req.body
    try {
    const user=await filterUserFromDb(searchData)
    const viewsData={
        users:user[0],
        filter:true
    }
    res.render("home",viewsData)
    } catch (error) {
     console.log(error);
    }
}

module.exports={
    get_Create,get_Dashboard,post_User,update_User,delete_User,get_Update_User,filter_User
}
