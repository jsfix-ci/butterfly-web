// Generated by Butterfly TypeScript converter
// File: time/TimeInterval.actual.kt
// Package: com.lightningkite.butterfly.time

//! Declares com.lightningkite.butterfly.time.TimeInterval
export class TimeInterval {
    public readonly milliseconds: number;
    public constructor(milliseconds: number) {
        this.milliseconds = milliseconds;
    }
    
    //! Declares com.lightningkite.butterfly.time.TimeInterval.seconds
    public get seconds(): number { return this.milliseconds / 1000.0; }
    
}

//! Declares com.lightningkite.butterfly.time.milliseconds
export function xIntMilliseconds(this_: number): TimeInterval{ return new TimeInterval(this_); }
//! Declares com.lightningkite.butterfly.time.seconds
export function xIntSeconds(this_: number): TimeInterval{ return new TimeInterval(this_ * 1000); }
//! Declares com.lightningkite.butterfly.time.minutes
export function xIntMinutes(this_: number): TimeInterval{ return new TimeInterval(this_ * 60 * 1000); }
//! Declares com.lightningkite.butterfly.time.hours
export function xIntHours(this_: number): TimeInterval{ return new TimeInterval(this_ * 60 * 60 * 1000); }
//! Declares com.lightningkite.butterfly.time.days
export function xIntDays(this_: number): TimeInterval{ return new TimeInterval(this_ * 24 * 60 * 60 * 1000); }

