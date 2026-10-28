var geojsonMerge = require('./'),
    test = require('tape'),
    fixtures = require('geojson-fixtures'),
    execFileSync = require('child_process').execFileSync,
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

test('streaming merge keeps every file, in order', function (t) {
    var file = 'fixtures/featureCollection.geojson';
    var inputs = [];
    for (var i = 0; i < 40; i++) inputs.push(file);
    geojsonMerge.mergeFeatureCollectionStream(inputs).pipe(concat(function (combined) {
        t.equal(JSON.parse(combined).features.length, 40);
        t.end();
    }));
});

test('cli', function (t) {
    var file = 'fixtures/featureCollection.geojson';
    ['-s', '--stream', null].forEach(function (flag) {
        var args = ['geojson-merge', file, file, file];
        if (flag) args.splice(1, 0, flag);
        var output = execFileSync(process.execPath, args, { encoding: 'utf8' });
        t.equal(JSON.parse(output).features.length, 3, (flag || 'no flag') + ' merges every file');
    });
    t.end();
});
