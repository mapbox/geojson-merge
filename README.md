# geojson-merge

[![build status](https://secure.travis-ci.org/mapbox/geojson-merge.png)](http://travis-ci.org/mapbox/geojson-merge)

Merge multiple [GeoJSON](http://geojson.org/) files into one FeatureCollection.

## install

```bash
$ npm install --save @mapbox/geojson-merge
```

## API

### merge

Merge a series of GeoJSON objects into one FeatureCollection containing all
features in all files.  The objects can be any valid GeoJSON root object,
including FeatureCollection, Feature, and Geometry types.

**Parameters**

-   `inputs` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>** a list of GeoJSON objects of any type

**Examples**

```javascript
var geojsonMerge = require('@mapbox/geojson-merge');

var mergedStream = geojsonMerge.merge([
  { type: 'Point', coordinates: [0, 1] },
  { type: 'Feature', geometry: { type: 'Point', coordinates: [0, 1] }, properties: {} }
]);

mergedStream.pipe(process.stdout);
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** a geojson FeatureCollection.

### mergeFeatureCollectionStream

Merge GeoJSON files containing GeoJSON FeatureCollections
into a single stream of a FeatureCollection as a JSON string.

This is more limited than merge - it only supports FeatureCollections
as input - but more performant, since it can operate on GeoJSON files
larger than what you can keep in memory at one time.

**Parameters**

-   `inputs` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** a list of filenames of GeoJSON files

**Examples**

```javascript
var geojsonMerge = require('@mapbox/geojson-merge');

var mergedStream = geojsonMerge.mergeFeatureCollectionStream([
  'features.geojson',
  'otherFeatures.geojson'])

mergedStream.pipe(process.stdout);
```

Returns **[Stream](https://nodejs.org/api/stream.html)** output: a stringified JSON of a FeatureCollection.

## cli

Options:

> `-s` or `--stream` to use the high-performance streaming mode. This allows
> you to combine very large GeoJSON files. Streaming mode requires every
> GeoJSON file to contain a FeatureCollection at the top level.

```bash
$ npm install -g @mapbox/geojson-merge
$ geojson-merge file.geojson otherfile.geojson > combined.geojson
```

## geojson-merge (for dummies)

### Windows Instructions:

1.  Start the `node.js` application  
2.  Open `cmd.exe`  
3.  Browse to a folder where you'd like `geojson-merge` installed  
4.  In `cmd.exe` type the install string from above  
5.  Wait patiently, it could take a moment to start  
6.  Use `cd node_modules` to change directory  to the `node_modules` folder  
7.  For simplicity sake, move your .geojson files into this `node_modules` directory  
8.  Run this command to merge your files:  

```bash
$ node geojson-merge file1.geojson file2.geojson > merged.geojson
```

**Merging multiple files in a folder**

```bash
$ geojson-merge folder/*.geojson > combined.geojson
```
