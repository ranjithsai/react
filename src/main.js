/*$ = jQuery = require('jquery');

var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function(window) {
	"use strict";

	var App = React.createClass({
		render: function(){
			var Child;
			switch(this.props.route){
				case 'about': Child = About; break;
				default: Child = Home;
			}
			return (
				<div>
					<Header/>
					<Child/>
				</div>
			);
		}
	});

	function render(){
		var route = window.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}

	window.addEventListener('hashchange', render);
	render();
})(window);
*/

"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, Router.HistoryLocation, function(Handler) {
	React.render(<Handler/>, document.getElementById('app'));
});
