
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComics } from '../actions/index';
import { GlobalStyle } from "../utils/styles";

class MainWrap extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    /*
    <!--
              Template for list items:
              <li class="comic-item">
                  <div class="comic-card">
                      <img src="..." />
                      <h2>Comic name</h2>
                      <button class="button js-add">Add to favourites</button>
                  </div>
              </li>
          -->
           <!--
                Template for list items:
                <li>
                    Comic name
                    <button class="remove js-remove"></button>
                </li>
            -->

    */


    return (
      <>
        <GlobalStyle />
        <header className="site-header">
          <h1 className="site-heading">Red Ant Comics</h1>
          <button className="favourites-toggle js-favourites-toggle">Go</button>
        </header>
        <main className="site-content">
          <ul id="comics-list" className="comics-list">
          </ul>
        </main>
        <div id="favourites-panel" className="favourites-panel">
          <div className="favourites-header">
            <h2>Favourites</h2>
            <button className="close js-close">Go</button>
          </div>
          <div className="favourites-content">
            <ul className="favourites-list">

            </ul>
          </div>
        </div>
      </>
  );
  }
}

function mapStateToProps(state: any) {
  return {
    comics: state.comics
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ fetchComics }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainWrap);
