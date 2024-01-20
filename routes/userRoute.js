const { post_User, get_Dashboard, update_User, delete_User, get_Update_User, get_Create, filter_User } = require("../controller/userController");

const router=require("express").Router();


router.get("/",get_Dashboard)

router.get("/create",get_Create)

router.post("/createuser",post_User)

//update
router.post("/update",get_Update_User)

router.post("/updateuser",update_User)

//delete
router.post("/delete",delete_User)

//filter user
router.post("/searchuser",filter_User)


module.exports=router