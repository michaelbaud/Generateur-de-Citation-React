import React from 'react';
import Citation from './Citation'
import citations from '../citations'

class App extends React.Component {

  state = {
    citations
  }

  componentWillMount() {
    this.generateCitation()
  }

  generateCitation = event => {
    const keyArray = Object.keys(citations)

    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)]

    if(this.state.citation === citations[randomKey].citation) {
      this.generateCitation()
      return
    }
    this.setState(citations[randomKey])
  }

  render() {
    return(
      <div className="w-80 w-50-m w-20-l center tc mt4 mt6-l">
        <Citation state={this.state}/>
        <button
          className="mt4 b--none bg-blue br3 white pv2 ph3 pointer"
          onClick={e => this.generateCitation(e)}
          >
            Une autre citation
        </button>
      </div>
    )
  }
}

export default App
