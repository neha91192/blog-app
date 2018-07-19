import React from 'react';
import BlogServiceClient from "../services/BlogServiceClient";

export default class BlogAdd extends React.Component{
    constructor(props) {
        super(props)
        this.blogService = BlogServiceClient.instance;
        this.state= {
            blogName: '',
            blogDescription: '',
            blogContent: ''
        }
        this.textChange= this.textChange.bind(this);
        this.addBlog= this.addBlog.bind(this);

    }
    // componentDidMount(){
    //     this.findBlogDetails( this.props.match.params.blogId);
    // }
    //
    // componentWillReceiveProps(newProps){
    //     this.findBlogDetails( newProps.match.params.blogId);
    // }
    // findBlogDetails(blogId){
    //     this.setState({blogId});
    //     this.blogService.findBlogById(blogId)
    //         .then(blog =>  this.setState({blog: blog}));
    // }
    textChange(text){
        this.setState(text);
    }
    addBlog(){
        let blog={
            name: this.state.blogName,
            blogDescription: this.state.blogDescription,
            blogContent: this.state.blogContent
        }
        this.blogService.addBlog(blog)
    }
    render() {
        return (
            <div>
                <h3>Blog Add</h3>
                <form style={{marginTop:'10px'}}>
                    <div className="form-group">
                        <label htmlFor="name" style={{fontWeight:'bold'}}>Blog Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Blog Name"
                            onChange={event => this.textChange({blogName: event.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" style={{fontWeight: 'bold'}}>Description</label>
                        <input type="text" className="form-control" id="description" placeholder="Blog Description"
                               onChange={event => this.textChange({blogDescription: event.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content" style={{fontWeight: 'bold'}}>Content</label>
                        <textarea cols="8" rows="8" className="form-control" id="content" placeholder="Blog Content"
                                  onChange={event => this.textChange({blogContent: event.target.value})}/>
                    </div>
                    <button className="btn btn-success float-right" type="button" onClick={this.addBlog}>
                        Save
                    </button>
                </form>
            </div>

        )
    }
}