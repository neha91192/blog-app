import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BlogPostContainer from "./containers/BlogPostContainer";

export default class BlogPostApp extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                        <a className="navbar-brand"
                           style={{color:'white', fontSize:"22px"}}>Blog Application</a>
                    </nav>
                    <Route path="/blog/" component={BlogPostContainer} />
                </div>
            </Router>
        )
    }
}