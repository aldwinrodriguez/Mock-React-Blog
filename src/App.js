import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Blogs from './components/Blogs';
import Gallery from './components/Gallery';

import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        pics : []
    }
  }

componentDidMount(){
    fetch('https://picsum.photos/v2/list?limit=20')
        .then(res => {
            return res.json();
        })
        .then(data => {
            let newData = data.map( picData =>
                {
                    return picData.download_url + '?grayscale';
                })
            this.setState({
                pics: newData
            })
        });
  }

  render(){
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
            <Route exact path='/' render={() => <Home claps={this.props.claps} hearts={this.props.hearts} />} />
            <Route exact path='/blogs' render={() => <Blogs claps={this.props.claps} addClaps={this.props.addClaps} decreaseClaps={this.props.decreaseClaps} />}/>
            <Route exact path='/gallery' render={() => <Gallery hearts={this.props.hearts} addHearts={this.props.addHearts} pics={this.state.pics}/>}/>
          </div>
        </Router>
      </div>
    );
  }
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
