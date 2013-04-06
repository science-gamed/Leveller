define( [], function () {

	'use strict';

	var Level, Tile, Column;

	Tile = function ( x, y ) {
		this.x = x;
		this.y = y;
	};

	Tile.prototype = {

	};

	Column = function ( x, height ) {
		this.x = x;
		this.yOffset = -( Math.floor( x / 2 ) );
		this.tiles = [];

		this.setHeight( height );
	};

	Column.prototype = {
		setHeight: function ( height ) {
			var i;

			if ( height < this.tiles.length ) {
				this.tiles.splice( height );
			}

			else {
				for ( i=this.tiles.length; i<height; i+=1 ) {
					this.tiles[i] = new Tile( this.x, i + this.yOffset );
				}
			}
		}
	};

	Level = function ( app ) {

		app.on( 'new', function () {
			app.state.set({
				'level.width': 0,
				'level.height': 0
			});

			app.state.set({
				'level.width': 10,
				'level.height': 10
			});
		});

		app.state.observe( 'level.width', function ( width, previousWidth ) {
			var columns, height, i;

			previousWidth = previousWidth || 0;

			columns = this.get( 'level.columns' ) || [];
			height = this.get( 'level.height' );

			// remove excess columns
			if ( width < previousWidth ) {
				columns.splice( width );
			}

			// add new columns
			for ( i=previousWidth; i<width; i+=1 ) {
				columns[i] = new Column( i, height );
			}

			this.set( 'level.columns', columns );
		}, true );

		app.state.observe( 'level.height', function ( height, previousHeight ) {
			var columns, i;

			columns = this.get( 'level.columns' );
			if ( !columns ) {
				return;
			}

			i = columns.length;
			while ( i-- ) {
				columns[i].setHeight( height );
			}

			this.set( 'level.columns', columns );

		}, true );
	};

	return Level;

});