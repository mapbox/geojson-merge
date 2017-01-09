var normalize = require('@mapbox/geojson-normalize');
var geojsonStream = require('geojson-stream');
var fs = require('fs');

/**
 * Merge multiple GeoJSON files into one FeatureCollection.
 *
 * @param {Feature | FeatureCollection | Geometry | string} inputs
 * @param {boolean} [options.stream]
 * @returns {GeoJSON.FeatureCollection | ReadStream}
 */
module.exports = function(inputs, options) {
    return (options || {}).stream
    ? geojsonStreamMerge(inputs)
    : geojsonMerge(inputs)
};

function geojsonMerge (inputs) {
    return {
        type: 'FeatureCollection',
        features: inputs.reduce(function(memo, input) {
            return memo.concat(normalize(input).features);
        }, [])
    };
}

function geojsonStreamMerge (inputs) {
    var out = geojsonStream.stringify();
    inputs.forEach(function(file) {
        fs.createReadStream(file)
            .pipe(geojsonStream.parse())
            .pipe(out);
    });
    return out;
}
