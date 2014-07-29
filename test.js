var merge = require('./'),
    test = require('tape'),
    fixtures = require('geojson-fixtures');

test('merge', function(t) {
    t.equal(merge([fixtures.geometry.point, fixtures.feature.one]).features.length, 2);
    t.end();
});
