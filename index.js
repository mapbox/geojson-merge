var normalize = require('geojson-normalize');
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
    var out = geojsonStream.stringify();
    inputs.forEach(function(file) {
        fs.createReadStream(file)
            .pipe(geojsonStream.parse())
            .pipe(out);
    });
    return out;
}
