
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComics } from '../actions';
import { GlobalStyle } from '../utils/styles';
import { Comic } from '../misc/api';

interface MainWrapProps {
  fetchComics: any,
  comics: Comic[]
};

class MainWrap extends Component<MainWrapProps> {

  state = { favourites: [] };

  /*
  addToFavourites(id: number) {
    let favourites = this.state.favourites;
    if (!favourites.includes(id)) {
      favourites.push(id);
    }
  }
   */

  componentDidMount() {
    this.props.fetchComics();
  }

  render() {
    let comics = this.props.comics;
    let comicsMU: any[] = [];

    comics = this.props.comics.filter((item: Comic) => {
      return (
        item.thumbnail &&
        !item.thumbnail.path.match(/image_not_available$/)
      );
    });

    comicsMU = comics.map(item => {
      return (
        <li key={ item.id } className="comic-item">
          <div className="comic-card">
            <img src={`${item.thumbnail.path}/portrait_uncanny.jpg`} alt=""/>
            <h2>{item.title}</h2>
            <button
              onClick={ () => {} }
              className="button js-add">
              Add to favourites
            </button>
          </div>
        </li>
      );
    });

    /*
    <!--
              Template for list items:

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
        <GlobalStyle/>
        <header className="site-header">
          <h1 className="site-heading">Red Ant Comics</h1>
          <button className="favourites-toggle js-favourites-toggle">Go</button>
        </header>
        <main className="site-content">
          <ul id="comics-list" className="comics-list">
            {comicsMU}
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
    comics: state.comics.comics
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ fetchComics }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainWrap);
