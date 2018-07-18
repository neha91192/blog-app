import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BlogList from "./containers/BlogList";
import BlogDetails from "./containers/BlogDetails";

export default class BlogApp extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1 className="display-4"> Simple Blog App </h1>
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 border">
                            <BlogList/>
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-9">
                            <BlogDetails/>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}