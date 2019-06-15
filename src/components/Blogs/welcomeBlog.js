import React from 'react'

function welcomeBlog() {
    let user = localStorage.getItem('name') === null ? 'there' : localStorage.getItem('name');
    return (
        <div>
            Hi {user}, Welcome to my Blog
        </div>
    )    
}

export default welcomeBlog;