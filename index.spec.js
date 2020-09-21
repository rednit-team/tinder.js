const Tinder = require('./index'),
	{ describe, it } = require('mocha'),
	{ should } = require('chai');
const tinder = new Tinder('d73c3c6d-b16e-40d5-8275-c0644dca7a68');

describe('Tinder', () => {
	it('getMessage', async (done) => {
		try {
			const message = await tinder.getMessage('5f6792fcd725e201000593e2');
			should().exist(message);
			done();
		} catch (err) {
			done(err);
		}
	});
});
