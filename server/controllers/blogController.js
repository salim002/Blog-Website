class BlogController{
    static getAllBlogs = async (req, res)=>{
        res.send("get all blogs");
    };
    
    static addNewBlog = async (req, res)=>{
        res.send("add new blog");
    };

    static getSingleBlog = async (req, res)=>{
        res.send("get single blog")
    };
}

export default BlogController;