import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Blogs from './components/Blogs';
import Gallery from './components/Gallery';
import Connect from './components/Connect';


function App() {
  return (
    <div id="App">
      <Router>
        <div id='nav'>
            <div>
              <Link to='/'>
                MyMockBlog
              </Link>
            </div>
            <div>
                <ul>
                    <li>
                      <Link to='/'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to='/blogs'>
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to='/gallery'>
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <a href='mailto:niwdla0405@gmail.com'>Connect</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/blogs' component={Blogs}/>
          <Route exact path='/gallery' component={Gallery}/>
          {/* <Route exact path='/connect' component={Connect}/> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
