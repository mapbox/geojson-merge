import { merge, mergeFeatureCollectionStream } from '../'
import * as path from 'path'
const fixtures = require('@mapbox/geojson-fixtures')

/**
 * Fixtures
 */
const point: GeoJSON.Feature<GeoJSON.Point> = fixtures.feature.point
const geometry: GeoJSON.GeometryObject = fixtures.geometry.point
const feature: GeoJSON.Feature<any> = fixtures.feature.one
const featureCollection = path.join(__dirname, '..', 'fixtures', 'featureCollection.geojson')

/**
 * Merge
 */
merge([geometry])
merge([feature])
merge([point])
merge([point, feature])
merge([point, feature, featureCollection])

/**
 * mergeFeatureCollectionStream
 */
const stream = mergeFeatureCollectionStream([featureCollection, featureCollection])
stream.pipe(process.stdout)
