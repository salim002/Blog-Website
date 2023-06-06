import React from 'react'
import {useNavigate} from "react-router-dom";

const SingleBlog = () => {
  const navigate = useNavigate();
  return (
    <>
        <div className="container shadow my-3">
            <div className="col-md-12 d-flex items-center justify-content-center bg-light">
                <div className="row">
                    <h1 className="my-3">Demo</h1>
                    <p className="my-3">Published Date: </p>
                    <img src={`https://www.kindpng.com/picc/m/235-2350682_new-svg-image-small-user-login-icon-hd.png`} alt="" className="img img-responsive img-rounded my-3" />
                    <p className="my-3">Demo Description</p>
                </div>
            </div>
            <button onClick={()=>navigate("/")} className="btn btn-primary">Back to Post</button>
        </div>
    </>
  )
}

export default SingleBlog
