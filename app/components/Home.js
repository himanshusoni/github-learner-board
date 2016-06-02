import React from 'react'
import { markdown } from 'markdown'
import getDocument from '../utils/helpers'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      doc: '',
      comments: [],
    }
  }
  componentDidMount(){
    getDocument().then((response) => {
      console.log(response)
      const markdownContent = atob(response.data.content)
      const markdownContentHTML = markdown.toHTML(markdownContent)
      this.setState({
        doc: markdownContentHTML
      })
    })
  }
  render() {
    return (
      <div>
        <div className="row">
          <h2 className="text-center">
            Github Learners Board
          </h2>
        </div>
        <div className="row" >
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Document</h3>
              </div>
              <div className="panel-body">
                 <div className="content" dangerouslySetInnerHTML={{__html: this.state.doc}}></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Comments</h3>
              </div>
              <div className="panel-body">
                Comments content
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
