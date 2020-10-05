<div align="center">
	<h1>Tinder.JS</h1>
	<strong><i>JavaScript Wrapper for the Tinder API</i></strong><br><br>
	<h4>Documentation coming soon...</h4>
	<small>This project was inspired by <a href="https://github.com/Kaktushose/tinder.py">tinder.py</a></small>
</div>


# Usage

~~~js
// Once the package is published on npm
const Tinder = require('tinder.js')
// Your x-auth-token can be found with devtools
// in the network tab. It's sent with every request
const tinder = new Tinder("X-AUTH-TOKEN")
~~~
Now that we have our tinder client ready, lets get some recommendations(swipes) and start swiping!
~~~js
// Since tinder sends us a random set of recommendations on every request
// we have to queue the swipes that are sent and only request some new ones
// once our queue is empty
const queue = []
const fetchRecs = (async () => {
    queue.push(...(await tinder.getSwipes()))
	console.log(queue)
	// will print an array of your swipe recommendations
	
})();
~~~
