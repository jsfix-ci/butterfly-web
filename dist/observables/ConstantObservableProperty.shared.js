"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Butterfly TypeScript converter - this file will be overwritten.
// File: observables/ConstantObservableProperty.shared.kt
// Package: com.lightningkite.butterfly.observables
const ObservableProperty_shared_1 = require("./ObservableProperty.shared");
const rxjs_1 = require("rxjs");
//! Declares com.lightningkite.butterfly.observables.ConstantObservableProperty
class ConstantObservableProperty extends ObservableProperty_shared_1.ObservableProperty {
    constructor(underlyingValue) {
        super();
        this.underlyingValue = underlyingValue;
        this.onChange = rxjs_1.NEVER;
    }
    //! Declares com.lightningkite.butterfly.observables.ConstantObservableProperty.value
    get value() { return this.underlyingValue; }
}
exports.ConstantObservableProperty = ConstantObservableProperty;
//# sourceMappingURL=ConstantObservableProperty.shared.js.map