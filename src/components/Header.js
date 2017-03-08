var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="header row">
        <div className="col-sm-9">
          <h1>Buyflix by Jay N</h1>
        </div>
        <div className="hello col-sm-3 text-center">
          <h2>Yo, what's up?</h2>
        </div>
      </div>
    )
  }
})

module.exports = Header;
