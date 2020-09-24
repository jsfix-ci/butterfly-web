"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Butterfly TypeScript converter
// File: String.extensions.actual.kt
// Package: com.lightningkite.butterfly
const kotlin_text_1 = require("./kotlin/kotlin.text");
const kotlin_text_2 = require("./kotlin/kotlin.text");
//! Declares com.lightningkite.butterfly.humanify>kotlin.String
function xStringHumanify(this_Humanify) {
    if (this_Humanify === "")
        return "";
    return this_Humanify[0].toUpperCase() + this_Humanify.replace(".", " - ").replace(new RegExp("[A-Z]"), (result) => " " + result).replace('_', ' ').trim();
}
exports.xStringHumanify = xStringHumanify;
//! Declares com.lightningkite.butterfly.toSnakeCase>kotlin.String
function xStringToSnakeCase(this_ToSnakeCase) {
    const builder = new kotlin_text_1.StringBuilder();
    for (const char of this_ToSnakeCase) {
        if (kotlin_text_2.xCharIsUpperCase(char)) {
            builder.value += '_';
            builder.value += char.toLowerCase();
        }
        else {
            builder.value += '\n';
            builder.value += char;
        }
    }
    return builder.toString().trim();
}
exports.xStringToSnakeCase = xStringToSnakeCase;
//# sourceMappingURL=String.extensions.actual.js.map