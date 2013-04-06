define( [ 'Ractive', 'rv!templates/preview' ], function ( Ractive, preview ) {

	'use strict';

	var Preview = Ractive.extend({
		template: preview,

		formatters: {
			convertCoords: function ( tile ) {
				var tX, tY, tZ, pX, pY, r, h;

				if ( !tile ) {
					return;
				}

				r = this.tileRadius;
				// h = r * Math.cos( Math.PI / 6 );
				h = r * 0.8660254037844387; 

				tX = tile.x;
				tY = tile.y;
				tZ = -( tX + tY );

				pX = r * ( tX - ( tY + tZ ) / 2 );
				pY = h * ( tY - tZ );

				return pX + ',' + pY;
			}
		}
	});

	return Preview;

});