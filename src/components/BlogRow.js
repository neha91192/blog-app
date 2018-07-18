import React from 'react';
import { Link } from 'react-router-dom'

export default class BlogRow extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return(
            <Link to={`/blog/${this.props.blog.id}`}>
                <li className="list-group-item" style={{margin: '3px'}}>
                    <span className="text-secondary">{this.props.blog.name}</span>
                </li>
            </Link>

        )
    }
}