import React from 'react'

// if the class is stateless, then it has only render fn.
// Thus we can just return the class as a function below
const Home = () => {
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
              Document content
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

export default Home
