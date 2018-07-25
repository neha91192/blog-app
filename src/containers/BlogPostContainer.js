import React from 'react';
import {Route} from 'react-router-dom';
import BlogPostList from "./BlogPostList";
import BlogPostDetails from "./BlogPostDetails";
import BlogPostCreateForm from "./BlogPostCreateForm";

export default class BlogPostContainer extends React.Component {
    render() {
        return (
                    <div className="container-fluid" style={{marginTop:"10px"}}>
                        <div className="row" style={{padding: "12px"}}>
                            <div className="col-sm-12 col-md-3 col-lg-3 border">
                                <BlogPostList/>
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-9">
                                <Route path="/blog/:blogId" component={BlogPostDetails} />
                                <Route path="/blog/new" component={BlogPostCreateForm} />
                            </div>
                        </div>
                    </div>
        )
    }
}