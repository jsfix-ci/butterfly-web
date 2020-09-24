// Generated by Butterfly TypeScript converter
// File: location/GeoCoordinate.actual.kt
// Package: com.lightningkite.butterfly.location
// FQImport: longitude TS setAndroidLocationLocationLongitude
// FQImport: com.lightningkite.butterfly.location.distanceToMiles.loc2 TS loc2
// FQImport: android.location.Location TS Location
// FQImport: android.location.Location.distanceTo TS distanceTo
// FQImport: latitude TS setAndroidLocationLocationLatitude
// FQImport: com.lightningkite.butterfly.location.GeoCoordinate.longitude TS longitude
// FQImport: com.lightningkite.butterfly.location.GeoCoordinate TS GeoCoordinate
// FQImport: com.lightningkite.butterfly.location.distanceToMiles.other TS other
// FQImport: com.lightningkite.butterfly.location.GeoCoordinate.latitude TS latitude
// FQImport: com.lightningkite.butterfly.location.distanceToMiles.loc1 TS loc1
import { GeoCoordinate } from './GeoCoordinate.shared'

//! Declares com.lightningkite.butterfly.location.distanceToMiles
export function xGeoCoordinateDistanceToMiles(this_: GeoCoordinate, other: GeoCoordinate): number{
    if ((this_.latitude == other.latitude) && (this_.longitude == other.longitude)) {
        return 0;
    }
    else {
        const thisLatRadians = Math.PI * this_.latitude/180;
        const otherLatRadians = Math.PI * other.latitude/180;
        const longitudeDelta = this_.longitude-other.longitude;
        const longitudeDeltaRadians = Math.PI * longitudeDelta/180;
        let dist = Math.sin(thisLatRadians) * Math.sin(otherLatRadians) + Math.cos(thisLatRadians) * Math.cos(otherLatRadians) * Math.cos(longitudeDeltaRadians);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        return dist;
    }
}

