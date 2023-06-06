import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
        <main className="my-5">
            <div className="container shadow-lg">
                <section className="text-center">
                    <h2 className="mb-5 my-3">
                        <strong>Latest Posts</strong>
                    </h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4">
                            <div className="card">
                                <div 
                                    className="bg-image hover-overlay ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <img src={`https://www.kindpng.com/picc/m/235-2350682_new-svg-image-small-user-login-icon-hd.png`} 
                                    alt=""
                                    className="img-fluid"
                                    />
                                    <a href="#!">
                                        <div className="mask"
                                            style={{backgroundColor: "rgba(251, 251, 251, 0.15",}}
                                        >
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Demo</h5>
                                    <p className="card-text">Demo Content</p>
                                    <Link to={`blog/1`} className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
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
            <a href="https://mdbootstrap.com/" className="text-white mx-2">mdsalim</a>
            </div>
        </footer>
    </>
  )
}

export default Home
