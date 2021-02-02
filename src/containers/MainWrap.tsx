
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComics } from '../actions/index';


class MainWrap extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (<h1>hello, world</h1>);
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
