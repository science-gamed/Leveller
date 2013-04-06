define( [ 'views/Tools' ], function ( View ) {
	
	'use strict';

	var Tools = function ( app ) {
		var view;

		view = new View({
			el: 'Interface_Tools'
		});

		view.on( 'set:mode', function ( mode ) {
			console.log( 'mode: %s', mode );
		});
	};

	return Tools;

});