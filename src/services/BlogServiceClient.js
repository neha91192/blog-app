let _singleton = Symbol();

class BlogServiceClient {

    BLOG_URL = "http://localhost:8080/api/blog";
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new BlogServiceClient(_singleton);
        return this[_singleton]
    }

    findAllBlogs() {
        return fetch(this.BLOG_URL)
            .then(response => response.json());
    }

    findBlogById(blogId) {
        return fetch(this.BLOG_URL+ '/' + blogId)
            .then(response => response.json());
    }

    addBlog(blog)
    {
        return fetch(this.BLOG_URL, {
            body: JSON.stringify(blog),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then(function (response) {
                return response.json();
            })
    }
}
export default BlogServiceClient;