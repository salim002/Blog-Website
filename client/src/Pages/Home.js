import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        const fetchAllBlogs = async ()=>{
            const res = await axios.get("http://localhost:9000/api/v1/get/allblogs",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            setBlogs(res.data);
        };
        fetchAllBlogs();
    },[]);

  return (
    <>
        <main className="my-5">
            <div className="container shadow-lg">
                <section className="text-center">
                    {blogs && blogs.length>0 && 
                        <h2 className="mb-5 my-3">
                            <strong>Latest Blogs</strong>
                        </h2>
                    }
                    <div className="row">
                        {blogs && blogs.length>0 ?
                         blogs.map((item)=>{
                            return (
                                <div className="card">
                                <div 
                                    className="bg-image hover-overlay ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <img src={`http://localhost:9000/${item.thumbnail}`} 
                                    alt=""
                                    className="img-fluid"
                                    style={{width: "50%", height: "400px", margin: "auto"}}
                                    />
                                    <a href="#!">
                                        <div className="mask"
                                            style={{backgroundColor: "rgba(251, 251, 251, 0.15",}}
                                        >
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <Link to={`blog/${item._id}`} className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                            )
                         })
                        : <h2>No Blogs Found</h2> }
                        <div className="col-lg-4 col-md-12 mb-4">
                        </div>
                    </div>
                </section>
            </div>
        </main>
        <footer className="bg-primary text-lg-start">
            <div 
                className="text-center p-3 text-white"
                style={{backgroundColor: "rgba(0, 0, 0, 0.2"}}
            >
            &#169; 2023 Copyright :
            <a href="/#" className="text-white mx-2">mdsalim</a>
            </div>
        </footer>
    </>
  )
}

export default Home
