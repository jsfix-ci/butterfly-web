// Generated by Khrysalis TypeScript converter
// File: location/ViewDependency.location.actual.kt
// Package: com.lightningkite.khrysalis.location
import { GeoCoordinate } from './GeoCoordinate.shared'
import { Range, tryCastClass } from '../Kotlin'
import { LocationResult } from './LocationResult.shared'

//! Declares com.lightningkite.khrysalis.location.requestLocation
export function xActivityAccessRequestLocation(
    this_RequestLocation: Window,
    accuracyBetterThanMeters: number = 10.0,
    timeoutInSeconds: number = 100.0,
    onResult: (a: (LocationResult | null), b: (string | null)) => void
){
    navigator.geolocation.getCurrentPosition(
        (position) => onResult(new LocationResult(
            new GeoCoordinate(position.coords.latitude, position.coords.longitude),
            position.coords.accuracy,
            position.coords.altitude ?? undefined,
            position.coords.altitudeAccuracy ?? undefined,
            position.coords.heading ?? undefined,
            position.coords.speed ?? undefined
        ), null),
        (err) => onResult(null, err.message),
        {
            maximumAge: timeoutInSeconds,
            timeout: timeoutInSeconds,
            enableHighAccuracy: accuracyBetterThanMeters <= 100
        }
    )
}

//! Declares com.lightningkite.khrysalis.location.requestLocationCached
export function xActivityAccessRequestLocationCached(
    this_RequestLocationCached: Window,
    accuracyBetterThanMeters: number = 10.0,
    timeoutInSeconds: number = 100.0,
    onResult: (a: (LocationResult | null), b: (string | null)) => void
){
    navigator.geolocation.getCurrentPosition(
        (position) => onResult(new LocationResult(
            new GeoCoordinate(position.coords.latitude, position.coords.longitude),
            position.coords.accuracy,
            position.coords.altitude ?? undefined,
            position.coords.altitudeAccuracy ?? undefined,
            position.coords.heading ?? undefined,
            position.coords.speed ?? undefined
        ), null),
        (err) => onResult(null, err.message),
        {
            maximumAge: 60 * 60 * 1000,
            timeout: timeoutInSeconds,
            enableHighAccuracy: accuracyBetterThanMeters <= 100
        }
    )
}

