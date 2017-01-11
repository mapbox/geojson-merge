var normalize = require('geojson-normalize');
var geojsonStream = require('geojson-stream');
var fs = require('fs');

/**
 * Merge a series of GeoJSON objects into one FeatureCollection containing all
 * features in all files.  The objects can be any valid GeoJSON root object,
 * including FeatureCollection, Feature, and Geometry types.
 *
 * @param {Array<Object>} inputs a list of GeoJSON objects of any type
 * @return {Object} a geojson FeatureCollection.
 */
function merge (inputs) {
    var output = {
        type: 'FeatureCollection',
        features: []
    };
    for (var i = 0; i < inputs.length; i++) {
        var normalized = normalize(inputs[i]);
        for (var j = 0; j < normalized.features.length; j++) {
            output.features.push(normalized.features[i]);
        }
    }
    return output;
}

/**
 * Merge GeoJSON files containing GeoJSON FeatureCollections
 * into a single stream of a FeatureCollection as a JSON string.
 *
 * This is more limited than merge - it only supports FeatureCollections
 * as input - but more performant, since it can operate on GeoJSON files
 * larger than what you can keep in memory at one time.
 * @param {Array<string>} inputs a list of filenames of GeoJSON files
 * @returns {Stream} output: a stringified JSON of a FeatureCollection.
 */
function mergeFeatureCollectionStream (inputs) {
    var out = geojsonStream.stringify();
    inputs.forEach(function(file) {
        fs.createReadStream(file)
            .pipe(geojsonStream.parse())
            .pipe(out);
    });
    return out;
}

module.exports.merge = merge;
module.exports.mergeFeatureCollectionStream = mergeFeatureCollectionStream;
