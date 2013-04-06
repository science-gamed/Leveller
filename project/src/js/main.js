require.config({
	baseUrl: 'js',
	urlArgs: "bust=" +  (new Date()).getTime(),
	paths: {
		Statesman: 'lib/Statesman',
		Ractive: 'lib/Ractive'
	}
});

require([ 'app' ]);