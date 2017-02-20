"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<ul className="nav navbar-nav">
						<li><Link to="app">Home</Link></li>
						<li><Link to="about">About</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
});

module.exports = Header;