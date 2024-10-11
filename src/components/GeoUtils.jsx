
const toDegrees = (meters) => meters / 111320; //arrow function var = function(param) => return value
const toRadians = (degrees) => degrees * (Math.PI / 180);


const getBoundaryCoordinates = (centerLatitude, centerLongitude, range) => {
    const latDegrees = toDegrees(range / 2);
    const lonDegrees = toDegrees(range / (2 * Math.cos(centerLatitude * Math.PI / 180)));

    return {
        topLeft: {
            latitude: centerLatitude + latDegrees,
            longitude: centerLongitude - lonDegrees
        },
        topRight: {
            latitude: centerLatitude + latDegrees,
            longitude: centerLongitude + lonDegrees
        },
        bottomLeft: {
            latitude: centerLatitude - latDegrees,
            longitude: centerLongitude - lonDegrees
        },
        bottomRight: {
            latitude: centerLatitude - latDegrees,
            longitude: centerLongitude + lonDegrees
        }
    };
};

const isWithinRange = (point, centerLatitude, centerLongitude, range) => {
    const boundaries = getBoundaryCoordinates(centerLatitude, centerLongitude, range);

    return (
        point.latitude >= boundaries.bottomLeft.latitude &&
        point.latitude <= boundaries.topLeft.latitude &&
        point.longitude >= boundaries.bottomLeft.longitude &&
        point.longitude <= boundaries.bottomRight.longitude
    );
};

const haversineDistance = (coord1, coord2) => {
    const R = 6371e3; // Earth radius in meters
    const lat1 = toRadians(coord1.latitude);
    const lon1 = toRadians(coord1.longitude);
    const lat2 = toRadians(coord2.latitude);
    const lon2 = toRadians(coord2.longitude);
  
    const deltaLat = lat2 - lat1;
    const deltaLon = lon2 - lon1;
  
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c; // Distance in meters
};

export { getBoundaryCoordinates, isWithinRange, haversineDistance };
