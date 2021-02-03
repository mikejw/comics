
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComics } from '../actions';
import { GlobalStyle } from '../utils/styles';
import { Comic } from '../misc/api';
import { Star } from '../images/Star';
import { Close } from '../images/Close';
import { Remove } from '../images/Remove';

interface MainWrapProps {
  fetchComics: any,
  comics: Comic[]
};

class MainWrap extends Component<MainWrapProps> {

  state: {
    favourites: number[],
    menu: boolean
  } = { favourites: [], menu: false };

  toggleMenu = () => {
    this.setState({ menu: !this.state.menu });
  }

  addToFavourites = (id: number) => {
    let favourites = this.state.favourites;
    if (!favourites.includes(id)) {
      favourites.push(id);
    }
    this.setState({ favourites });
  }

  removeFromFavourites = (id: number) => {
    let favourites = this.state.favourites;
    const index = favourites.indexOf(id);
    if (index > -1) {
      favourites.splice(index, 1);
    }
    this.setState({ favourites });
  }

  componentDidMount() {
    this.props.fetchComics();
  }

  render() {
    let comics: Comic[] = this.props.comics;
    let comicsMU: any[] = [];
    let favourites: Comic[] = [];
    let favouritesMU: any[] = [];

    // remove empty image items
    comics = this.props.comics.filter((item: Comic) => {
      return (
        item.thumbnail &&
        !item.thumbnail.path.match(/image_not_available$/)
      );
    });

    // gather favourites
    favourites = comics.filter((item: Comic) => {
      return (
        this.state.favourites.includes(item.id)
      );
    });

    // remove favourites
    comics = comics.filter((item: Comic) => {
      return (
        !this.state.favourites.includes(item.id)
      );
    });

    comicsMU = comics.map(item => {
      return (
        <li key={ item.id } className="comic-item">
          <div className="comic-card">
            <img src={`${item.thumbnail.path}/portrait_uncanny.jpg`} alt=""/>
            <h2>{item.title}</h2>
            <button
              onClick={ () => this.addToFavourites(item.id) }
              className="button js-add">
              Add to favourites
            </button>
          </div>
        </li>
      );
    });

    favouritesMU = favourites.map(item => {
      return (
        <li key={ item.id } className="comic-item">
          <div className="comic-card">
            <img src={`${item.thumbnail.path}/portrait_uncanny.jpg`} alt=""/>
            <h2>{item.title}</h2>
            <button
              onClick={ () => this.removeFromFavourites(item.id) }
              className="button remove js-remove">
              <Remove />
            </button>
          </div>
        </li>
      );
    });

    return (
      <>
        <GlobalStyle/>
        <header className="site-header">
          <h1 className="site-heading">Red Ant Comics</h1>
          <button
            onClick={ () => { this.toggleMenu() } }
            className="favourites-toggle js-favourites-toggle"
          >
            <Star color="#fff" />
          </button>
        </header>
        <main className="site-content">
          <ul id="comics-list" className="comics-list">
            {comicsMU}
          </ul>
        </main>
        <div
          id="favourites-panel"
          className={`favourites-panel ${ this.state.menu? 'open': '' }`}
        >
          <div className="favourites-header">
            <h2>Favourites</h2>
            <button onClick={ () => { this.toggleMenu() } } className="close js-close">
              <Close />
            </button>
          </div>
          <div className="favourites-content">
            <ul className="favourites-list">
              { favouritesMU }
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
