import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BlogList from "./containers/BlogList";
import BlogDetails from "./containers/BlogDetails";
import BlogAdd from "./containers/BlogAdd";
import BlogServiceClient from "./services/BlogServiceClient";

export default class BlogApp extends React.Component {
    constructor(props) {
        super(props)
        this.blogService = BlogServiceClient.instance;
        this.state= {
            blogAddDisplay: false
        }
        this.displayBlogAdd = this.displayBlogAdd.bind(this);
    }
    displayBlogAdd(){
        this.setState({blogAddDisplay: !this.state.blogAddDisplay});
        console.log(this.props);
    }
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark    ">
                        <a className="navbar-brand"
                           style={{color:'white', fontWeight:"bolder", fontSize:"x-large",
                               fontFamily:"Times New Roman"}}>Blog App</a>
                    </nav>
                    <div className="container-fluid" style={{marginTop:"10px"}}>
                        <div className="row">
                            <div className="col-sm-12 col-md-3 col-lg-3 border">
                                <BlogList blogAdd={this.displayBlogAdd}/>
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-9">
                                <BlogAdd visiblity={this.state.blogAddDisplay}/>
                                 <Route path="/blog/:blogId/" component={BlogDetails} />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}