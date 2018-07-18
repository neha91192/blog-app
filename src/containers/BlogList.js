import React from 'react';
import BlogRow from "../components/BlogRow";


export default class BlogList extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            blogList: [
                {id: 1, name: 'Travel'},
                {id: 2, name: 'Food'},
                {id: 3, name: 'Lifestyle'},
                {id: 4, name: 'Entertainment'},
                {id: 5, name: 'Games'},
                {id: 6, name: 'Sports'},
                {id: 7, name: 'Fiction'},

            ]
        }

        this.renderBlogs = this.renderBlogs.bind(this);
    }

    componentDidMount() {

    }

    componentWillReceiveProps() {

    }

    renderBlogs() {
        let blogs = this.state.blogList.map(blog => {
            return <BlogRow blog= {blog} key={blog.id}/>
        });

        return blogs;
    }

    render() {
        return (
            <div>
                <h3>Blog List</h3>
                <hr/>
                <div className="row" style={{marginBottom: "10px"}}>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <input className="form-control" placeholder="New Blog Name"/>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <span >
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