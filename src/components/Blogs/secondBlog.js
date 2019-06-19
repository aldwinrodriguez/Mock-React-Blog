import React from 'react'

function secondBlog(props) {
    return (
        <div>
            <h1>Story heading for SECOND blog</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='contentButtons'>
                <button onClick={props.addClaps}>
                    <span role='img' aria-label=''>👏</span>
                </button>
                <button onClick={props.decreaseClaps}>
                    <span role='img' aria-label=''>👎</span>
                </button>
            </div>
        </div>
    )
}
export default secondBlog;