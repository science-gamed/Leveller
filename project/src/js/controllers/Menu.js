define( [], function () {
	
	'use strict';

	var MenuController = function ( app ) {
		var options, i, onclick;

		options = document.getElementById( 'Menu_Options' ).querySelectorAll( 'li' );

		onclick = function () {
			app.fire( this.dataset.action );
		};

		i = options.length;
		while ( i-- ) {
			options[i].addEventListener( 'click', onclick );
		}

		app.on( 'new', function () {
			console.log( 'new!' );
		});
	};

	return MenuController;

});