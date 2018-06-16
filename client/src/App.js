import React, { PureComponent } from 'react';
import renderHTML from 'react-render-html';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Components/Header';
import PostListContainer from './Components/PostListContainer';
import PostContainer from './Components/PostContainer';
import store from './redux/store';

class App extends PureComponent {
  // state = { posts: [] };

  // componentDidMount() {
  //   this.getPost('20170226');
  // }

  _redirectToHome() {
    return <Redirect to="/" />;
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router>
            <div>
              <Header />

              {/* content */}
              <Switch>
                <Route exact path="/" component={PostListContainer} />
                <Route path="/posts/:id" component={PostContainer} />

                {/* catch-all redirects to home */}
                <Route render={this._redirectToHome} />
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
