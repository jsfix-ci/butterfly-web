"use strict";
// Generated by Butterfly TypeScript converter
// File: Platform.actual.kt
// Package: com.lightningkite.butterfly
// FQImport: com.lightningkite.butterfly.Platform.Android TS Android
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
//! Declares com.lightningkite.butterfly.Platform
class Platform {
    constructor(name) { this.name = name; }
    static values() { return Platform._values; }
    static valueOf(name) { return Platform[name]; }
    toString() { return this.name; }
}
exports.Platform = Platform;
Platform.iOS = new Platform("iOS");
Platform.Android = new Platform("Android");
Platform.Web = new Platform("Web");
Platform.Companion = (_a = class Companion {
        constructor() {
            this.current = Platform.Web;
            this.current = Platform.Web;
        }
    },
    _a.INSTANCE = new _a(),
    _a);
Platform._values = [Platform.iOS, Platform.Android, Platform.Web];
//# sourceMappingURL=Platform.actual.js.map