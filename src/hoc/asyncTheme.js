import React, { Component } from 'react'

const asyncTheme = (WrappedComponent, url) => (
  // eslint-disable-next-line
  class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        theme: null,
      }
    }

    componentDidMount() {
      fetch(url)
        .then(theme => theme.json())
        .then(theme => this.setState({ theme }))
        .catch(err => this.setState({ err }));
    }

    render() {
      return this.state.theme ?
        <WrappedComponent theme={this.state.theme}/>
        : <h1>Error</h1>;
    }
  }
)

export default asyncTheme
