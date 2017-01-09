import * as merge from '../'
import * as path from 'path'
const fixtures = require('@mapbox/geojson-fixtures')

const point: GeoJSON.Feature<GeoJSON.Point> = fixtures.feature.point
const geometry: GeoJSON.GeometryObject = fixtures.geometry.point
const feature: GeoJSON.Feature<any> = fixtures.feature.one
const featureCollection = path.join(__dirname, '..', 'fixtures', 'featureCollection.geojson')

merge([geometry])
merge([feature])
merge([point])
merge([point, feature])
merge([point, feature, featureCollection])
merge([featureCollection], {stream: true})
