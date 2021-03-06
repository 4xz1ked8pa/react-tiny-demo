var React = require('react');
var Link = require('react-router').Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </nav>
        
        <main>{this.props.children}</main>
        
        <footer>
        &copy; 2016 decode
        </footer>
      </div>
    );
  }
});

module.exports = App;