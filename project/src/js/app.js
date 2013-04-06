define([
	'domReady',
	'state',

	'controllers/Menu',
	'controllers/Level',
	'controllers/Preview',
	'controllers/Tools'
],

function ( domReady, state, Menu, Level, Preview, Tools ) {

	'use strict';

	var app = {
		state: state,

		init: function () {
			console.log( 'initing' );
		},

		// events
		subscribers: {},

		on: function ( eventName, callback ) {
			var id;

			if ( typeof eventName === 'object' ) {
				for ( id in eventName ) {
					if ( eventName.hasOwnProperty( id ) ) {
						this.on( id, eventName[ id ] );
					}
				}

				return;
			}

			if ( !this.subscribers[ eventName ] ) {
				this.subscribers[ eventName ] = [];
			}

			this.subscribers[ eventName ].push( callback );
		},

		fire: function ( eventName ) {
			var args, subscribers, i, len;

			subscribers = this.subscribers[ eventName ];

			if ( !subscribers ) {
				return;
			}

			args = Array.prototype.slice.call( arguments, 1 );

			for ( i=0, len=subscribers.length; i<len; i+=1 ) {
				subscribers[i].apply( null, args );
			}
		}
	};

	domReady( function () {
		app.menuController = new Menu( app );
		app.levelController = new Level( app );
		app.previewController = new Preview( app );
		app.toolsController = new Tools( app );
	});



	window.app = app;

});