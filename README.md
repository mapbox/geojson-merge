# geojson-merge

[![build status](https://secure.travis-ci.org/mapbox/geojson-merge.png)](http://travis-ci.org/mapbox/geojson-merge)

Merge multiple [GeoJSON](http://geojson.org/) files into one FeatureCollection.

## install

    npm install geojson-merge

## api

### `merge([geojson, geojson2...])`

Merges GeoJSON objects (geometry, feature, or featurecollection) into one
FeatureCollection.

## cli

Options:

* `-s` or `--stream` to use the high-performance streaming mode. This allows
  you to combine very large GeoJSON files. Streaming mode requires every
  GeoJSON file to contain a FeatureCollection at the top level.

    npm install -g geojson-merge
    geojson-merge file.geojson otherfile.geojson > combined.geojson

## geojson-merge (for dummies)
  
### Windows Instructions:  
  
1. Start the `node.js` application  
2. Open `cmd.exe`  
2. Browse to a folder where you'd like `geojson-merge` installed  
3. In `cmd.exe` type the install string from above  
4. Wait patiently, it could take a moment to start  
5. Use `cd node_modules` to change directory  to the `node_modules` folder  
5. For simplicity sake, move your .geojson files into this `node_modules` directory  
6. Run this command to merge your files:  
  
```
node geojson-merge file1.geojson file2.geojson > merged.geojson
```

**Merging multiple files in a folder**

```
geojson-merge folder/*.geojson > combined.geojson
```

