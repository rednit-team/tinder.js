const Tinder = require('./index');

const tinder = new Tinder('d73c3c6d-b16e-40d5-8275-c0644dca7a68');

tinder.getMatches()
	.then(console.log);
