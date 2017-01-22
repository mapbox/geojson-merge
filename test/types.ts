import { merge, mergeFeatureCollectionStream } from '../'
import * as path from 'path'
import * as fs from 'fs'
const fixtures = require('@mapbox/geojson-fixtures')

/**
 * Fixtures
 */
const geometry: GeoJSON.GeometryObject = fixtures.geometry.point
const feature: GeoJSON.Feature<any> = fixtures.feature.one
const featureCollectionPath = path.join(__dirname, '..', 'fixtures', 'featureCollection.geojson')
const featureCollection = JSON.parse(fs.readFileSync(featureCollectionPath, 'utf-8'))

/**
 * Merge
 */
merge([geometry])
merge([feature])
merge([feature, featureCollection])

/**
 * mergeFeatureCollectionStream
 */
const stream = mergeFeatureCollectionStream([featureCollectionPath, featureCollectionPath])
stream.pipe(process.stdout)
