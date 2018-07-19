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
                    <h3>Blog Details</h3>
                    <div className="row">
                        {this.state.blog.name}
                        {/*{this.state.blog.name}*/}
                    </div>
                </div>

        )
    }
}