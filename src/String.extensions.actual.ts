// Generated by Khrysalis TypeScript converter
// File: String.extensions.actual.kt
// Package: com.lightningkite.khrysalis
import { StringBuilder } from './kotlin/kotlin.text'
import { xCharIsUpperCase } from './kotlin/kotlin.text'

//! Declares com.lightningkite.khrysalis.humanify>kotlin.String
export function xStringHumanify(this_Humanify: string): string{
    if(this_Humanify === "") return ""
    return this_Humanify[0].toUpperCase() + this_Humanify.replace(".", " - ").replace(new RegExp("[A-Z]"), (result) => " " + result).replace('_', ' ').trim();
}

//! Declares com.lightningkite.khrysalis.toSnakeCase>kotlin.String
export function xStringToSnakeCase(this_ToSnakeCase: string): string{
    const builder = new StringBuilder();
    
    for (const char of this_ToSnakeCase) {
        if (xCharIsUpperCase(char)) {
            builder.value += '_';
            builder.value += char.toLowerCase();
        } else {
            builder.value += '\n';
            builder.value += char;
        }
    }
    return builder.toString().trim();
}
