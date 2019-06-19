import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FirstBlog from './Blogs/firstBlog';
import SecondBlog from './Blogs/secondBlog';
import ThirdBlog from './Blogs/thirdBlog';
import FourthBlog from './Blogs/fourthBlog';
import WelcomeBlog from './Blogs/welcomeBlog';

function Blogs(props) {
    const {claps, addClaps, decreaseClaps} = props;
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
                        <Route exact path='/blogs/' render={() => <FirstBlog addClaps={addClaps} decreaseClaps={decreaseClaps} /> } />
                        <Route path='/blogs/firstBlog' render={() => <FirstBlog addClaps={addClaps} decreaseClaps={decreaseClaps} /> } />
                        <Route path='/blogs/secondBlog' render={() => <SecondBlog addClaps={addClaps} decreaseClaps={decreaseClaps} /> } />
                        <Route path='/blogs/thirdBlog' render={() => <ThirdBlog addClaps={addClaps} decreaseClaps={decreaseClaps} /> } />
                        <Route path='/blogs/fourthBlog' render={() => <FourthBlog addClaps={addClaps} decreaseClaps={decreaseClaps} /> } />
                    </div>
                </div>
            </Router>
            <div>
                total claps = {claps}
            </div>
        </div>
    )
}
export default Blogs;