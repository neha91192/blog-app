import React from 'react';
import BlogServiceClient from "../services/BlogServiceClient";

export default class BlogAdd extends React.Component {
    constructor(props) {
        super(props)
        this.blogService = BlogServiceClient.instance;
        this.state = {
            name: '',
            description: '',
            content: '',
            text: ''
        }
        this.textChange = this.textChange.bind(this);
        this.addBlog = this.addBlog.bind(this);

    }
    textChange(text) {
        this.setState(text);
    }

    addBlog() {
        let blog = {
            name: this.state.name,
            description: this.state.description,
            content: this.state.content,

        }
        if(this.state.name) {
            this.blogService.addBlog(blog)
                .then(blog =>  {
                        this.props.history.push(`/`);
                        alert('Saved Successfully')
                    }
                );
        }
    }

    render() {
        return (
            <div>
                <h3 style={{padding: '10px'}}>Create a new Blog</h3>
                <div className="form-group row" style={{padding: '8px'}}>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                        <label htmlFor="name" className="text-dark"
                               style={{fontSize: '18px'}}>Blog Name</label>
                    </div>
                    <div className="col-sm-12 col-md-10 col-lg-10">
                        <input type="text" className="form-control" id="name" placeholder="Blog Name"
                               onChange={event => this.textChange({blogName: event.target.value})}/>
                    </div>
                </div>

                <div className="form-group row" style={{padding: '8px'}}>
                    <div className="col-sm-12 col-md-2 col-lg-2">
                        <label htmlFor="description" className="text-dark"
                               style={{fontSize: '18px'}}>Description</label>
                    </div>
                    <div className="col-sm-12 col-md-10 col-lg-10">
                        <input type="text" className="form-control" id="description" placeholder="Blog Description"
                               onChange={event => this.textChange({blogDescription: event.target.value})}/>
                    </div>
                </div>


                <div className="form-group row" style={{padding: '8px'}}>
                    <div className="col-sm-12 col-md-2 col-lg-2" style={{paddingBottom: '10px'}}>
                        <label htmlFor="content" className="text-dark"
                               style={{fontSize: '18px'}}>Content</label>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                              <textarea cols="8" rows="8" className="form-control" id="content"
                                        placeholder="Start writing"
                                        onChange={event => this.textChange({blogContent: event.target.value})}/>
                    </div>
                </div>

                <span style={{paddingRight: '20px'}}>
                        <button className="btn btn-success float-right" type="button" onClick={this.addBlog}>
                            Save
                        </button>
                </span>


            </div>

        )
    }
}