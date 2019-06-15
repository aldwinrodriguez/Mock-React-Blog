import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import firstBlog from './Blogs/firstBlog';
import secondBlog from './Blogs/secondBlog';
import thirdBlog from './Blogs/thirdBlog';
import fourthBlog from './Blogs/fourthBlog';

function Blogs() {
    return (
        <div id='blogs'>
            <Router>
                <div className='blogContainer'>
                    <ul className='blogIndex'>
                        <li>
                            <Link to='/blogs/firstBlog'>
                                First Blog  
                            </Link>
                        </li>
                        <li>
                            <Link to='/blogs/secondBlog'>
                                Second Blog  
                            </Link>
                        </li>
                        <li>
                            <Link to='/blogs/thirdBlog'>
                                Third Blog  
                            </Link>
                        </li>
                        <li>
                            <Link to='/blogs/fourthBlog'>
                                Fourth Blog  
                            </Link>
                        </li>
                    </ul>
                    <div className='blogContent'>
                        <Route path='/blogs/firstBlog' component={firstBlog} />
                        <Route path='/blogs/secondBlog' component={secondBlog} />
                        <Route path='/blogs/thirdBlog' component={thirdBlog} />
                        <Route path='/blogs/fourthBlog' component={fourthBlog} />
                    </div>
                </div>
            </Router>
        </div>
    )
}
export default Blogs;