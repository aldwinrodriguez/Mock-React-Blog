import React from 'react'

function thirdBlog(props) {
    return (
        <div>
            <h1>Story heading for THIRD blog</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button onClick={props.addClaps}>
                <span role='img' aria-label=''>👏</span>
            </button>
            <button>
                <span role='img' aria-label=''>👎</span>
            </button>
        </div>
    )
}
export default thirdBlog;