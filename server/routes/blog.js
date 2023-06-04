import express from "express";
const router = express.Router();
import AuthController from '../controllers/authController.js';
import BlogController from '../controllers/BlogController.js';
import CategoryController from '../controllers/CategoryController.js';


router.post("/user/register", AuthController.userRegisteration);
router.post("/user/login", AuthController.userLogin);

// Protected Routes

router.get("/get/allblogs", BlogController.getAllBlogs);
router.post("/add/blog", BlogController.addNewBlog);
router.get("/get/blog:id", BlogController.getSingleBlog);

router.get("/get/categories", CategoryController.getAllCategories);
router.post("/add/category", CategoryController.addNewCategory);


export default router;