// Generated by Butterfly TypeScript converter - this file will be overwritten.
// File: time/ClockPartSize.shared.kt
// Package: com.lightningkite.butterfly.time

//! Declares com.lightningkite.butterfly.time.ClockPartSize
export class ClockPartSize {
    private constructor(name: string, jsonName: string) {
        this.name = name;
        this.jsonName = jsonName;
    }
    public static None = new ClockPartSize("None", "None");
    public static Short = new ClockPartSize("Short", "Short");
    public static Medium = new ClockPartSize("Medium", "Medium");
    public static Long = new ClockPartSize("Long", "Long");
    public static Full = new ClockPartSize("Full", "Full");
    private static _values: Array<ClockPartSize> = [ClockPartSize.None, ClockPartSize.Short, ClockPartSize.Medium, ClockPartSize.Long, ClockPartSize.Full];
    public static values(): Array<ClockPartSize> { return ClockPartSize._values; }
    public readonly name: string;
    public readonly jsonName: string;
    public static valueOf(name: string): ClockPartSize { return (ClockPartSize as any)[name]; }
    public toString(): string { return this.name }
    public toJSON(): string { return this.jsonName }
}

