import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BlogList from "./containers/BlogList";
import BlogDetails from "./containers/BlogDetails";

export default class BlogApp extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark    ">
                        <a className="navbar-brand"
                           style={{color:'white', fontWeight:"bolder", fontSize:"x-large", fontFamily:"Times New Roman"}}
                        >Blog App</a>
                    </nav>
                    <div className="container-fluid" style={{marginTop:"10px"}}>
                        <div className="row">
                            <div className="col-sm-12 col-md-3 col-lg-3 border">
                                <Route path="/" component={BlogList} />
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-9">
                                <Route path="/:blogId/" component={BlogDetails} />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}