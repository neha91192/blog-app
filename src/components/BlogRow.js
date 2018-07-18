import React from 'react';

export default class BlogRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li className="list-group-item"><span className="text-secondary">{this.props.blog.name}</span></li>
        )
    }
}