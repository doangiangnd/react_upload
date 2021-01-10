import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Movie from "../Pages/Movie";
import Serie from "../Pages/Serie";
import "./page-content.css";

const PageContent = () => {
  return (
    <div className="PageContent">
      <div className="container">
        <div className="movie-wrapper">
          <Router>
            <Link to="/series">
              <div className="movie-item">
                <div className="movie-wrapper-item">
                  <div className="title">Series</div>
                  <div className="wrapper-image">
                    <img src="./assets/placeholder.png" alt="" />
                  </div>
                </div>
                <div>Popular Series</div>
              </div>
            </Link>
            <Link to="/movies">
              <div className="movie-item">
                <div className="movie-wrapper-item">
                  <div className="title">Movies</div>
                  <div className="wrapper-image">
                    <img src="./assets/placeholder.png" alt="" />
                  </div>
                </div>
                <div>Popular Movies</div>
              </div>
              <div className="clearfix"></div>
            </Link>
            <Switch>
              <Route path="/movies" exact component={Movie} />
              <Route path="/series" component={Serie} />
            </Switch>
          </Router>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
