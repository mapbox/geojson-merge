var merge = require('./'),
    test = require('tape'),
    fixtures = require('geojson-fixtures');


test('merge', function(t) {
    t.equal(merge([fixtures.geometry.point, fixtures.feature.one]).features.length, 2);
    t.end();
});

test('streaming merge', function (t) {
    var stream = merge(['fixtures/featureCollection.geojson', 'fixtures/featureCollection.geojson'], { stream: true });
    t.equal(typeof stream, 'object');
    t.equal(typeof stream.pipe,'function');
    t.end();
});
