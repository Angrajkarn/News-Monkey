import React from 'react';
import NavBar from "./component/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import News from './component/news';

class App extends React.Component {
  pageSize = 5;
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <div>
        <Router> {/* Wrap your routes with BrowserRouter */}
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} key="general" country="in" pageSize={this.pageSize} category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News setProgress={this.setProgress} key="business" country="in" pageSize={this.pageSize} category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News setProgress={this.setProgress} key="entertainment" country="in" pageSize={this.pageSize} category="entertainment" />}
            />
            <Route
              exact
              path="/general"
              element={<News setProgress={this.setProgress} key="general" country="in" pageSize={this.pageSize} category="general" />}
            />
            <Route
              exact
              path="/health"
              element={<News setProgress={this.setProgress} key="health" country="in" pageSize={this.pageSize} category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News setProgress={this.setProgress} key="science" country="in" pageSize={this.pageSize} category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News setProgress={this.setProgress} key="sports" country="in" pageSize={this.pageSize} category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News setProgress={this.setProgress} key="technology" country="in" pageSize={this.pageSize} category="technology" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
