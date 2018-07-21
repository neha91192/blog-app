import React from 'react';
import BlogServiceClient from "../services/BlogServiceClient";

export default class BlogDetails extends React.Component{
    constructor(props) {
        super(props)
        this.blogService = BlogServiceClient.instance;
        this.state= {
            blogId: '',
            blog: {}
        }
        this.findBlogDetails = this.findBlogDetails.bind(this);
    }
    componentDidMount(){
        this.findBlogDetails( this.props.match.params.blogId);
    }

    componentWillReceiveProps(newProps){
        this.findBlogDetails( newProps.match.params.blogId);
    }
    findBlogDetails(blogId){
        this.setState({blogId});
        this.blogService.findBlogById(blogId)
            .then(blog =>  this.setState({blog: blog}));
    }
    render() {
        return (
                <div>
                    <h3>{this.state.blog.name}</h3>
                    <p>{this.state.blog.content}</p>
                    <p>{this.state.blog.description}</p>
                    <p>{this.state.blog.text}</p>
                </div>

        )
    }
}