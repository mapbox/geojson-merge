var geojsonMerge = require('./'),
    test = require('tape'),
    fixtures = require('@mapbox/geojson-fixtures')
    concat = require('concat-stream');


test('merge', function(t) {
    t.equal(geojsonMerge.merge([fixtures.geometry.point, fixtures.feature.one]).features.length, 2);
    t.end();
});

test('streaming merge', function (t) {
    var stream = geojsonMerge.mergeFeatureCollectionStream(['fixtures/featureCollection.geojson', 'fixtures/featureCollection.geojson'], { stream: true });
    t.equal(typeof stream, 'object');
    t.equal(typeof stream.pipe,'function');
    stream.pipe(concat(function (combined) {
        t.equal(JSON.parse(combined).features.length, 2);
        t.end();
    }));
});
