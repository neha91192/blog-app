import React from 'react';
import BlogRow from "../components/BlogRow";
import BlogServiceClient from "../services/BlogServiceClient";


export default class BlogList extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            blogList: [],
            blogName: ''
        }
        this.blogService = BlogServiceClient.instance;
        this.renderBlogs = this.renderBlogs.bind(this);
        this.editBlgName = this.editBlgName.bind(this);
        this.addBlog = this.addBlog.bind(this);
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

    editBlgName(blogName){
        this.setState(blogName);
    }

    renderBlogs() {
        let blogs = this.state.blogList.map(blog => {
            return <BlogRow blog= {blog} key={blog.id}/>
        });

        return blogs;
    }
    addBlog(){
        this.blogService.addBlog({name: this.state.blogName})
            .then(res => this.findAllBlogs())
            .then(this.setState({blogname: ''}))
    }

    render() {
        return (
            <div>
                <h3>Blog List</h3>
                <hr/>
                <div className="row" style={{marginBottom: "10px"}}>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <input className="form-control" placeholder="New Blog Name"
                        onChange={event => this.editBlgName({blogName:event.target.value})}/>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <span onClick={this.addBlog}>
                            <i className="fa fa-plus-circle fa-2x" style={{color:"blue"}}/>
                        </span>
                    </div>

                </div>
                <ul className="list-group">
                    {this.renderBlogs()}
                </ul>
            </div>


        )
    }
}