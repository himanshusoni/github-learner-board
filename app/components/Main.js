import React from 'react'
import SearchGithub from './SearchGithub'

class Main extends React.Component {
  // const Main = ({ history, children }) => {
  getRef (ref) {
    this.usernameRef = ref
  }
  handleSubmit (e) {
    e.preventDefault()
    const username = this.usernameRef.value
    console.log(username)
    this.usernameRef.value = ''
  // store the name of the current user in storage
  // display name in the header bar
  }
  render () {
    const { history, children } = this.props
    return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <span className="navbar-brand">Hello!</span>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-right" role="search" onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Let us know who are you"
                  ref={(ref) => this.getRef(ref)} />
              </div>
              <button type="submit" className="btn btn-default">
                Save
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
    )
  }
}

export default Main
