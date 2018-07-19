import React from 'react';
import BlogRow from "../components/BlogRow";
import BlogServiceClient from "../services/BlogServiceClient";
import { Link } from 'react-router-dom'

export default class BlogList extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            blogList: []
        }
        this.blogService = BlogServiceClient.instance;
        this.renderBlogs = this.renderBlogs.bind(this);
        // this.editBlgName = this.editBlgName.bind(this);
        // this.addBlog = this.addBlog.bind(this);
        this.findAllBlogs= this.findAllBlogs.bind(this);
    }

    componentDidMount() {
       this.findAllBlogs();
    }

    componentWillReceiveProps(){

    }

    findAllBlogs(){
        this.blogService.findAllBlogs()
            .then(blogList =>
            {
                this.setState({blogList})});
    }

    // editBlgName(blogName){
    //     this.setState(blogName);
    // }

    renderBlogs() {
        let blogs = this.state.blogList.map(blog => {
            return <BlogRow blog= {blog} key={blog.id}/>
        });

        return blogs;
    }
    // addBlog(){
    //     if(this.state.blogName) {
    //         this.blogService.addBlog({name: this.state.blogName})
    //             .then(res => this.findAllBlogs())
    //             .then(this.setState({blogname: ''}))
    //     }
    // }

    render() {
        return (
            <div>
                <h4 style={{paddingTop: "10px"}}>All Blogs</h4>
                <hr/>
                <div className="row" style={{marginBottom: "10px"}}>
                    <div className="col-sm-12 col-md-6 col-lg-8 input-group">
                        <input  type="text" className="form-control" placeholder="Search"/>
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fa fa-search"></i></span>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Link to ={'/new'}>
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="fa fa-plus"/> New</button>
                        </Link>
                    </div>

                </div>

                <ul className="list-group">
                    {this.renderBlogs()}
                </ul>
            </div>


        )
    }
}