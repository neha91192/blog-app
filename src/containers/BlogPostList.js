import React from 'react';
import BlogPostRow from "../components/BlogPostRow";
import BlogPostServiceClient from "../services/BlogPostServiceClient";
import { Link } from 'react-router-dom'

export default class BlogPostList extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            blogList: []
        }
        this.blogService = BlogPostServiceClient.instance;
        this.renderBlogs = this.renderBlogs.bind(this);
        // this.editBlgName = this.editBlgName.bind(this);
        // this.addBlog = this.addBlog.bind(this);
        this.findAllBlogs= this.findAllBlogs.bind(this);
    }

    componentDidMount() {
       this.findAllBlogs();
    }

    componentWillReceiveProps(){
        this.findAllBlogs();
    }

    findAllBlogs(){
        this.blogService.findAllBlogs()
            .then(blogList =>
            {
                this.setState({blogList})});
    }
    renderBlogs() {
        let blogs = this.state.blogList.map(blog => {
            return <BlogPostRow blog= {blog} key={blog.id}/>
        });

        return blogs;
    }

    render() {
        return (
            <div>
                <div className="row justify-content-between" style={{marginBottom: "10px",
                    paddingLeft: "15px", paddingTop: "15px"}}>
                    <h4 style={{paddingTop: "10px"}}>All Blog Posts</h4>
                    <div className="col-sm-12 col-md-12 col-lg-4" style={{padding: "8px"}}>
                        <Link to ={'/blog/new'}>
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="fa fa-plus"/> New</button>
                        </Link>
                    </div>

                </div>
                <hr/>

                <ul className="list-group">
                    {this.renderBlogs()}
                </ul>
            </div>


        )
    }
}