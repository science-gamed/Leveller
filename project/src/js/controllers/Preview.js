define( [ 'views/Preview' ], function ( View ) {

	'use strict';

	var Preview = function ( app ) {
		var view;

		view = new View({
			el: 'Interface_Main'
		});

		app.state.observe( 'tileRadius', function ( radius ) {
			view.tileRadius = radius;
		}, true );

		app.state.observe( 'preview', function ( preview ) {
			view.set( 'preview', preview );
		}, true );

		app.state.observe( 'level.columns', function ( columns ) {
			view.set( 'columns', columns );
		}, true );
	};

	return Preview;

});