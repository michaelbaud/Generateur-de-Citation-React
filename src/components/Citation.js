import React from 'react'

class Citation extends React.Component {
  render() {
    return(
      <p className="dark-gray f4 lh-title">
        {this.props.state.citation}
        <span className="db tr mt4 mid-gray">{this.props.state.auteur}</span>
      </p>
    )
  }
}

export default Citation
