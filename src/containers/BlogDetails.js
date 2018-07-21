import React from 'react';
import BlogServiceClient from "../services/BlogServiceClient";

export default class BlogDetails extends React.Component {
    constructor(props) {
        super(props)
        this.blogService = BlogServiceClient.instance;
        this.state = {
            blogId: '',
            name: '',
            description: '',
            text: '',
            editMode: false
        }
        this.findBlogDetails = this.findBlogDetails.bind(this);
        this.displayBlogInPreviewMode = this.displayBlogInPreviewMode.bind(this);
        this.deleteBlog = this.deleteBlog.bind(this);
        this.edit = this.edit.bind(this);
        this.displayBlogInEditMode = this.displayBlogInEditMode.bind(this);
        this.textChange = this.textChange.bind(this);
        this.updateBlog = this.updateBlog.bind(this);
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
            .then(blog => this.setState({name: blog.name, description: blog.description, text: blog.text}));
    }

    deleteBlog() {
        this.blogService.deleteBlog(this.state.blogId)
            .then(response => {
                this.props.history.push(`/blog/`);
                alert('Deleted Successfully');
            })
    }

    edit() {
        this.setState({editMode: !this.state.editMode});
    }

    textChange(text) {
        this.setState(text);
    }

    updateBlog() {
        let blog = {
            name: this.state.name,
            description: this.state.description,
            text: this.state.text,
            id: this.state.blogId

        }
        if(this.state.name) {
            this.blogService.updateBlog(blog)
                .then(blog =>  {
                        this.setState({editMode: !this.state.editMode})
                        alert('Updated Successfully')
                    }
                );
        }
    }

    displayBlogInPreviewMode() {
        return (
            <div className="border" style={{paddingLeft: "30px", paddingRight: "30px"}}>
                <div className="row justify-content-between" style={{padding: "10px"}}>
                    <h3 className="text-info">{this.state.name}</h3>

                    <div className="row">
                        <div style={{padding: "2px"}}>
                        <button type="button" className="btn btn-outline-secondary" onClick={this.edit}>
                            <i className="fa fa-pencil"/></button>
                        </div>
                        <div style={{padding: "2px"}}>
                        <button type="button" className="btn btn-outline-secondary" onClick={this.deleteBlog}>
                            <i className="fa fa-trash"/></button>
                        </div>
                    </div>
                </div>
                <p><span className="text-secondary">{this.state.description}</span></p>
                <hr/>
                <div className="row" style={{paddingTop: "5px", paddingBottom: "20px"}}>
                    <div className="col-12"><p>{this.state.text}</p></div>
                </div>


            </div>
        )
    }

    displayBlogInEditMode() {
        return (
            <div className="border" style={{paddingLeft: "30px", paddingRight: "30px"}}>
                <div className="row justify-content-between" style={{padding: "10px"}}>
                    <h3 className="text-info">
                        <input type="text" className="form-control text-info" id="name" value={this.state.name}
                               onChange={event => this.textChange({name: event.target.value})}/>
                    </h3>

                    <div className="row">
                        <div style={{padding: "2px"}}>
                            <button type="button" className="btn btn-outline-secondary" onClick={this.updateBlog}>
                                <i className="fa fa-floppy-o"/></button>
                        </div>
                        <div style={{padding: "2px"}}>
                            <button type="button" className="btn btn-outline-secondary" disabled="true">
                                <i className="fa fa-trash"/></button>
                        </div>
                    </div>
                </div>
                <p><span className="text-secondary">
                    <input type="text" className="form-control text-secondary" id="name" value={this.state.description}
                           onChange={event => this.textChange({description: event.target.value})}/>
                </span></p>
                <hr/>
                <div className="row" style={{paddingTop: "5px", paddingBottom: "20px"}}>
                    <div className="col-12"><p>
                        <textarea cols="8" rows="8" type="text" className="form-control" id="name" value={this.state.text}
                               onChange={event => this.textChange({text: event.target.value})}/>
                    </p></div>
                </div>


            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.match.params.blogId !== "new" && !this.state.editMode && this.displayBlogInPreviewMode()}
                {this.props.match.params.blogId !== "new" && this.state.editMode && this.displayBlogInEditMode()}
            </div>

        )
    }
}