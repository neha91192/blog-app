import React from 'react';
import BlogServiceClient from "../services/BlogServiceClient";

export default class BlogDetails extends React.Component {
    constructor(props) {
        super(props)
        this.blogService = BlogServiceClient.instance;
        this.state = {
            blogId: '',
            blog: {},
            editMode: false
        }
        this.findBlogDetails = this.findBlogDetails.bind(this);
        this.displayBlogInPreviewMode = this.displayBlogInPreviewMode.bind(this);
        this.deleteBlog = this.deleteBlog.bind(this);
    }

    componentDidMount() {
        this.findBlogDetails(this.props.match.params.blogId);
    }

    componentWillReceiveProps(newProps) {
        this.findBlogDetails(newProps.match.params.blogId);
    }

    findBlogDetails(blogId) {
        this.setState({blogId});
        this.blogService.findBlogById(blogId)
            .then(blog => this.setState({blog: blog}));
    }

    deleteBlog() {
        this.blogService.deleteBlog(this.state.blogId)
            .then(response => {
                this.props.history.push(`/blog/`);
                alert('Deleted Successfully');
            })
    }

    displayBlogInPreviewMode() {
        return (
            <div className="border" style={{paddingLeft: "30px", paddingRight: "30px"}}>
                <div className="row justify-content-between" style={{padding: "10px"}}>
                    <h3 className="text-info">{this.state.blog.name}</h3>

                    <div className="row">
                        <div style={{padding: "2px"}}>
                        <button type="button" className="btn btn-outline-secondary">
                            <i className="fa fa-pencil"/></button>
                        </div>
                        <div style={{padding: "2px"}}>
                        <button type="button" className="btn btn-outline-secondary" onClick={this.deleteBlog}>
                            <i className="fa fa-trash"/></button>
                        </div>
                    </div>
                </div>
                <p><span className="text-secondary">{this.state.blog.description}</span></p>
                <hr/>
                <div className="row" style={{paddingTop: "5px", paddingBottom: "20px"}}>
                    <div className="col-12"><p>{this.state.blog.text}</p></div>
                </div>


            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.match.params.blogId !== "new" && !this.state.editMode && this.displayBlogInPreviewMode()}
            </div>

        )
    }
}