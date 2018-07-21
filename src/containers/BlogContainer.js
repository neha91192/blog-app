import React from 'react';
import {Route} from 'react-router-dom';
import BlogList from "./BlogList";
import BlogDetails from "./BlogDetails";
import BlogAdd from "./BlogAdd";

export default class BlogContainer extends React.Component {
    render() {
        return (
                <div>
                    <div className="container-fluid" style={{marginTop:"10px"}}>
                        <div className="row" style={{padding: "12px"}}>
                            <div className="col-sm-12 col-md-3 col-lg-3 border">
                                <BlogList/>
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-9">
                                <Route path="/blog/:blogId" component={BlogDetails} />
                                <Route path="/blog/new" component={BlogAdd} />
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}