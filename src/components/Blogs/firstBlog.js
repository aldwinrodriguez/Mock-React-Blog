import React from 'react'

function firstBlog(props) {
    return (
        <div>
            <h1>Story heading for FIRST blog</h1>
            <p>
            I have made the blog content like this, instead of a formated style/compontent because I want to make a dynamic and interactive blog here in the future.
            </p>
            <div className='contentButtons'>
                <div className='buttons' onClick={props.addClaps}>
                    <span role='img' aria-label=''>👏</span>
                </div>
                <div className='buttons' onClick={props.decreaseClaps}>
                    <span role='img' aria-label=''>👎</span>
                </div>
            </div>
        </div>
    )
}
export default firstBlog;