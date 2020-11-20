'use strict';

const EARTH_RADIUS = 6372795;

function degreesToRadians(deg) {
	return (deg * Math.PI) / 180;
}

function calculateDistanceBetween2Dots(lat1, long1, lat2, long2) {
	const lat1Rad = degreesToRadians(lat1);
	const long1Rad = degreesToRadians(long1);
	const lat2Rad = degreesToRadians(lat2);
	const long2Rad = degreesToRadians(long2);

	const cosLat1 = Math.cos(lat1Rad);
	const cosLat2 = Math.cos(lat2Rad);
	const sinLat1 = Math.sin(lat1Rad);
	const sinLat2 = Math.sin(lat2Rad);
	const delta = long2Rad - long1Rad;
	const sinDelta = Math.sin(delta);
	const cosDelta = Math.cos(delta);

	const leftNumerator = Math.pow(cosLat2 * sinDelta, 2);
	const rightNumerator = Math.pow(cosLat1 * sinLat2 - sinLat1 * cosLat2 * cosDelta, 2);
	const numerator = Math.sqrt(leftNumerator + rightNumerator, 1 / 2);

	const denumerator = sinLat1 * sinLat2 + cosLat1 * cosLat2 * cosDelta;

	return Math.atan2(numerator, denumerator) * EARTH_RADIUS;
}

console.log(calculateDistanceBetween2Dots(77.1539, -139.398, -77.1804, -139.55));
