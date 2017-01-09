/// <reference types="geojson" />
/// <reference types="node" />

import {ReadStream} from 'fs'

type Points = GeoJSON.FeatureCollection<GeoJSON.Point>;
type Point = GeoJSON.Feature<GeoJSON.Point>;
type MultiPoints = GeoJSON.FeatureCollection<GeoJSON.MultiPoint>;
type MultiPoint = GeoJSON.Feature<GeoJSON.MultiPoint>;
type LineStrings = GeoJSON.FeatureCollection<GeoJSON.LineString>;
type LineString = GeoJSON.Feature<GeoJSON.LineString>;
type MultiLineStrings = GeoJSON.FeatureCollection<GeoJSON.MultiLineString>;
type MultiLineString = GeoJSON.Feature<GeoJSON.MultiLineString>;
type Polygons = GeoJSON.FeatureCollection<GeoJSON.Polygon>;
type Polygon = GeoJSON.Feature<GeoJSON.Polygon>;
type MultiPolygons = GeoJSON.FeatureCollection<GeoJSON.MultiPolygon>;
type MultiPolygon = GeoJSON.Feature<GeoJSON.MultiPolygon>;
type Features = GeoJSON.FeatureCollection<any>;
type Feature = GeoJSON.Feature<any>;

interface Merge {
  /**
   * https://github.com/mapbox/geojson-merge
   */
  (inputs: Array<Points | Point>): Points
  (inputs: Array<MultiPoint | MultiPoints>): MultiPoints
  (inputs: Array<LineString | LineStrings>): LineStrings
  (inputs: Array<MultiLineString | MultiLineStrings>): MultiLineStrings
  (inputs: Array<Polygon | Polygons>): Polygons
  (inputs: Array<MultiPolygon | MultiPolygons>): MultiPolygons
  (inputs: Array<Feature | Features | string>): Features
  (inputs: Array<Feature | Features | string>, options?: {stream: boolean}): ReadStream
}
declare const merge: Merge
export = merge