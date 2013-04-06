define( [ 'Statesman' ], function ( Statesman ) {

	'use strict';

	var state = new Statesman({
		tileRadius: 1,

		level: {
			width: 10,
			height: 10,
			columns: []
		}
	});

	// calculate preview width and height based on columns and rows
	state.compute( 'preview.width', {
		triggers: [ 'level.width', 'tileRadius' ],
		fn: function ( width, radius ) {
			return 1.5 * ( width - 1 ) * radius;
		}
	});

	state.compute( 'preview.height', {
		triggers: [ 'level.height', 'tileRadius' ],
		fn: function ( height, radius ) {
			return ( height - 0.5 ) * radius * 1.7320508075688774;
		}
	});

	return state;

});