define( [], function () {
	
	'use strict';

	var convertCoords = function ( tX, tY, r ) {
		var tZ, pX, pY, h;

		//r = this.tileRadius;
		h = r * Math.cos( Math.PI / 6 );

		tZ = -( tX + tY );

		pX = r * ( tX - ( tY + tZ ) / 2 );
		pY = h * ( tY - tZ );

		return {
			x: pX,
			y: pY
		};
	};

	return convertCoords;

});