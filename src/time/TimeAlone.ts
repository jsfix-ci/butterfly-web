// Generated by Butterfly TypeScript converter
// File: time/TimeAlone.kt
// Package: com.lightningkite.butterfly.time
import { TimeInterval } from './TimeInterval'
import {  xDateTimeAloneGet } from './Date'
import {parseIntOrNull} from "../Kotlin";

//! Declares com.lightningkite.butterfly.time.TimeAlone
export class TimeAlone {
    public hour: number;
    public minute: number;
    public second: number;
    public constructor(hour: number, minute: number, second: number) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    public hashCode(): number {
        let hash = 17;
        hash = 31 * hash + this.hour;
        hash = 31 * hash + this.minute;
        hash = 31 * hash + this.second;
        return hash;
    }
    public equals(other: any): boolean { return other instanceof TimeAlone && this.hour === other.hour && this.minute === other.minute && this.second === other.second }
    public toString(): string { return `TimeAlone(hour = ${this.hour}, minute = ${this.minute}, second = ${this.second})` }
    public copy(hour: number = this.hour, minute: number = this.minute, second: number = this.second) { return new TimeAlone(hour, minute, second); }

    public toJSON(): any {
        return xTimeAloneIso8601(this)
    }
    public static Companion = class Companion {
        private constructor() {
            this.min = new TimeAlone(0, 0, 0);
            this.midnight = this.min;
            this.noon = new TimeAlone(12, 0, 0);
            this.max = new TimeAlone(23, 59, 59);
        }
        public static INSTANCE = new Companion();
        
        public now(): TimeAlone{ return xDateTimeAloneGet(new Date()); }
        public iso(string: string): (TimeAlone | null){
            const parts = string.split(':');
            const hour = parseIntOrNull(parts[0]);
            if(hour === null) return null;
            const minute = parseIntOrNull(parts[1]);
            if(minute === null) return null;
            let second = parseIntOrNull(parts[2]);
            if(second === null) second = 0;
            return new TimeAlone(hour, minute, second);
        }
        
        public readonly min = new TimeAlone(0, 0, 0);
        
        public readonly midnight = this.min;
        
        public readonly noon = new TimeAlone(12, 0, 0);
        
        public readonly max = new TimeAlone(23, 59, 59);
        
    }
    
    //! Declares com.lightningkite.butterfly.time.TimeAlone.comparable
    public get comparable(): number { return this.hour * 60 * 60 + this.minute * 60 + this.second; }
    
    //! Declares com.lightningkite.butterfly.time.TimeAlone.secondsInDay
    public get secondsInDay(): number { return this.hour * 60 * 60 + this.minute * 60 + this.second; }
    public set secondsInDay(value: number) {
        this.hour = value / 60 / 60;
        this.minute = value / 60 % 60;
        this.second = value % 60;
    }
    
    //! Declares com.lightningkite.butterfly.time.TimeAlone.hoursInDay
    public get hoursInDay(): number { return this.hour + this.minute / 60 + this.second / 3600 + 0.5 / 3600; }
    public set hoursInDay(value: number) {
        this.hour = Math.floor(value);
        this.minute = Math.floor((value * 60)) % 60;
        this.second = Math.floor((value * 3600)) % 60;
    }
    
}

//! Declares com.lightningkite.butterfly.time.iso8601>com.lightningkite.butterfly.time.TimeAlone
export function xTimeAloneIso8601(this_: TimeAlone): string{
    return `${this_.hour.toString().padStart(2, "0")}:${this_.minute.toString().padStart(2, "0")}:${this_.second.toString().padStart(2, "0")}`
}

//! Declares com.lightningkite.butterfly.time.minus
export function xTimeAloneMinus(this_: TimeAlone, rhs: TimeAlone | TimeInterval): TimeAlone{
    let offset = 0;
    if(rhs instanceof TimeAlone){
        offset = (rhs.hour * 60 * 60 + rhs.minute * 60 + rhs.second);
    } else if(rhs instanceof TimeInterval){
        offset = rhs.milliseconds / 1000;
    }
    const result = (this_.hour * 60 * 60 + this_.minute * 60 + this_.second) - offset;
    
    return (() => {if (result < 0) {
                return new TimeAlone(0, 0, 0);
            } else {
                return new TimeAlone(Math.floor(result / 60 / 60), Math.floor(result / 60 % 60), Math.floor(result % 60));
    }})();
}

//! Declares com.lightningkite.butterfly.time.plus
export function xTimeAlonePlus(this_: TimeAlone, rhs: TimeAlone | TimeInterval): TimeAlone{
    let offset = 0;
    if(rhs instanceof TimeAlone){
        offset = (rhs.hour * 60 * 60 + rhs.minute * 60 + rhs.second);
    } else if(rhs instanceof TimeInterval){
        offset = rhs.milliseconds / 1000;
    }
    const result = (this_.hour * 60 * 60 + this_.minute * 60 + this_.second) + offset;
    
    return new TimeAlone(Math.floor(result / 60 / 60), Math.floor(result / 60 % 60), Math.floor(result % 60));
}
