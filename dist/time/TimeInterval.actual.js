"use strict";
// Generated by Butterfly TypeScript converter
// File: time/TimeInterval.actual.kt
// Package: com.lightningkite.butterfly.time
Object.defineProperty(exports, "__esModule", { value: true });
//! Declares com.lightningkite.butterfly.time.TimeInterval
class TimeInterval {
    constructor(milliseconds) {
        this.milliseconds = milliseconds;
    }
    //! Declares com.lightningkite.butterfly.time.TimeInterval.seconds
    get seconds() { return this.milliseconds / 1000.0; }
}
exports.TimeInterval = TimeInterval;
//! Declares com.lightningkite.butterfly.time.milliseconds
function xIntMilliseconds(this_) { return new TimeInterval(this_); }
exports.xIntMilliseconds = xIntMilliseconds;
//! Declares com.lightningkite.butterfly.time.seconds
function xIntSeconds(this_) { return new TimeInterval(this_ * 1000); }
exports.xIntSeconds = xIntSeconds;
//! Declares com.lightningkite.butterfly.time.minutes
function xIntMinutes(this_) { return new TimeInterval(this_ * 60 * 1000); }
exports.xIntMinutes = xIntMinutes;
//! Declares com.lightningkite.butterfly.time.hours
function xIntHours(this_) { return new TimeInterval(this_ * 60 * 60 * 1000); }
exports.xIntHours = xIntHours;
//! Declares com.lightningkite.butterfly.time.days
function xIntDays(this_) { return new TimeInterval(this_ * 24 * 60 * 60 * 1000); }
exports.xIntDays = xIntDays;
//# sourceMappingURL=TimeInterval.actual.js.map