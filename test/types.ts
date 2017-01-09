import * as merge from '../'
import * as path from 'path'
const fixtures = require('geojson-fixtures')

const point: GeoJSON.Feature<GeoJSON.Point> = fixtures.geometry.point
const feature: GeoJSON.Feature<any> = fixtures.feature.one
const featureCollection = path.join(__dirname, '..', 'fixtures', 'featureCollection.geojson')

merge([feature])
merge([point])
merge([point, feature])
merge([point, feature, featureCollection])
merge([featureCollection], {stream: true})
