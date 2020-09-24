"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Khrysalis TypeScript converter - this file will be overwritten.
// File: location/GeoAddress.shared.kt
// Package: com.lightningkite.khrysalis.location
const Kotlin_1 = require("../Kotlin");
const kotlin_text_1 = require("../kotlin/kotlin.text");
const GeoCoordinate_shared_1 = require("./GeoCoordinate.shared");
const jsonParsing_1 = require("../net/jsonParsing");
//! Declares com.lightningkite.khrysalis.location.GeoAddress
class GeoAddress {
    constructor(coordinate = null, name = null, street = null, subLocality = null, locality = null, subAdminArea = null, adminArea = null, countryName = null, postalCode = null) {
        this.coordinate = coordinate;
        this.name = name;
        this.street = street;
        this.subLocality = subLocality;
        this.locality = locality;
        this.subAdminArea = subAdminArea;
        this.adminArea = adminArea;
        this.countryName = countryName;
        this.postalCode = postalCode;
    }
    static fromJson(obj) {
        return new GeoAddress(jsonParsing_1.parse(obj["coordinate"], [GeoCoordinate_shared_1.GeoCoordinate]), jsonParsing_1.parse(obj["name"], [String]), jsonParsing_1.parse(obj["street"], [String]), jsonParsing_1.parse(obj["subLocality"], [String]), jsonParsing_1.parse(obj["locality"], [String]), jsonParsing_1.parse(obj["subAdminArea"], [String]), jsonParsing_1.parse(obj["adminArea"], [String]), jsonParsing_1.parse(obj["countryName"], [String]), jsonParsing_1.parse(obj["postalCode"], [String]));
    }
    toJSON() {
        return {
            coordinate: this.coordinate,
            name: this.name,
            street: this.street,
            subLocality: this.subLocality,
            locality: this.locality,
            subAdminArea: this.subAdminArea,
            adminArea: this.adminArea,
            countryName: this.countryName,
            postalCode: this.postalCode
        };
    }
    hashCode() {
        let hash = 17;
        hash = 31 * hash + Kotlin_1.hashAnything(this.coordinate);
        hash = 31 * hash + Kotlin_1.hashAnything(this.name);
        hash = 31 * hash + Kotlin_1.hashAnything(this.street);
        hash = 31 * hash + Kotlin_1.hashAnything(this.subLocality);
        hash = 31 * hash + Kotlin_1.hashAnything(this.locality);
        hash = 31 * hash + Kotlin_1.hashAnything(this.subAdminArea);
        hash = 31 * hash + Kotlin_1.hashAnything(this.adminArea);
        hash = 31 * hash + Kotlin_1.hashAnything(this.countryName);
        hash = 31 * hash + Kotlin_1.hashAnything(this.postalCode);
        return hash;
    }
    equals(other) { return other instanceof GeoAddress && Kotlin_1.safeEq(this.coordinate, other.coordinate) && Kotlin_1.safeEq(this.name, other.name) && Kotlin_1.safeEq(this.street, other.street) && Kotlin_1.safeEq(this.subLocality, other.subLocality) && Kotlin_1.safeEq(this.locality, other.locality) && Kotlin_1.safeEq(this.subAdminArea, other.subAdminArea) && Kotlin_1.safeEq(this.adminArea, other.adminArea) && Kotlin_1.safeEq(this.countryName, other.countryName) && Kotlin_1.safeEq(this.postalCode, other.postalCode); }
    toString() { return `GeoAddress(coordinate = ${this.coordinate}, name = ${this.name}, street = ${this.street}, subLocality = ${this.subLocality}, locality = ${this.locality}, subAdminArea = ${this.subAdminArea}, adminArea = ${this.adminArea}, countryName = ${this.countryName}, postalCode = ${this.postalCode})`; }
    copy(coordinate = this.coordinate, name = this.name, street = this.street, subLocality = this.subLocality, locality = this.locality, subAdminArea = this.subAdminArea, adminArea = this.adminArea, countryName = this.countryName, postalCode = this.postalCode) { return new GeoAddress(coordinate, name, street, subLocality, locality, subAdminArea, adminArea, countryName, postalCode); }
    oneLine(withCountry = false, withZip = false) {
        const builder = new kotlin_text_1.StringBuilder();
        const it_9 = this.street;
        if (it_9 !== null) {
            builder.value += it_9;
        }
        const it_10 = this.locality;
        if (it_10 !== null) {
            builder.value += ' ';
            builder.value += it_10;
        }
        const it_11 = this.adminArea;
        if (it_11 !== null) {
            builder.value += ", ";
            builder.value += it_11;
        }
        if (withCountry) {
            const it_13 = this.adminArea;
            if (it_13 !== null) {
                builder.value += ' ';
                builder.value += it_13;
            }
        }
        if (withZip) {
            const it_14 = this.postalCode;
            if (it_14 !== null) {
                builder.value += ' ';
                builder.value += it_14;
            }
        }
        return builder.toString().trim();
    }
}
exports.GeoAddress = GeoAddress;
//# sourceMappingURL=GeoAddress.shared.js.map