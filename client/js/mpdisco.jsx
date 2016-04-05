var React = require('react/addons');

var Network = require('./network.js');

var BasicMode = require('./basic_mode.jsx');
var MasterMode = require('./master_mode.jsx');

var MPDiscoController = require('./mpdisco_controller.js');

var network = new Network(window.location.hostname, 8080);

var controller = new MPDiscoController(network);

var MPDisco = MasterMode;

React.render(<MPDisco controller={controller} network={network} />, document.body);
