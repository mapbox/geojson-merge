var normalize = require('geojson-normalize');
var StreamConcat = require('stream-concat');
var geojsonStream = require('geojson-stream');
var fs = require('fs');

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
    var streams = inputs.map(function(file) {
        return fs.createReadStream(file);
    })
    var nextStream = function () {
        return streams.shift() || null;
    }

    var combinedStream = new StreamConcat(nextStream, { objectMode: true });

    combinedStream.pipe(geojsonStream.parse())
      .pipe(geojsonStream.stringify())
      .pipe(process.stdout);
}
