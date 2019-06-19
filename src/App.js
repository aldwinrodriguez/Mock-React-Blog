import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Blogs from './components/Blogs';
import Gallery from './components/Gallery';

import { connect } from 'react-redux';


function App(props) {
  console.log('thi', props)
  return (
    <div id="App">
      <div>
        total hearts = {props.hearts}
      </div>
      <div>
        total claps = {props.claps}
      </div>
      <div onClick={props.decreaseClaps}>
        click
      </div>

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
          <Route exact path='/blogs' render={() => <Blogs claps={props.claps} addClaps={props.addClaps} />}/>
          <Route exact path='/gallery' render={() => <Gallery hearts={props.hearts} addHearts={props.addHearts} />}/>
        </div>
      </Router>
    </div>
  );
}

const mapToStateProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    addHearts: () => {
      dispatch({
        type: 'addHeart'
      })
    },
    addClaps: () => {
      dispatch({
        type: 'addClap'
      })
    },
    decreaseClaps: () => {
      dispatch({
        type: 'decreaseClap'
      })
    }
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(App);
