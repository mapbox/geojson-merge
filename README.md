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

    npm install -g geojson-merge
    geojson-merge file.geojson otherfile.geojson > combined.geojson
